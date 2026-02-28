
import re
import datetime
import math

INPUT_FILE = '/Users/davidverastegui/.gemini/antigravity/scratch/brothersfilms-reporte/index.html'
OUTPUT_FILE = '/Users/davidverastegui/Desktop/BrothersFilms_Eventos_2026.ics'

def parse_js_obj(js_str):
    """Parsea un objeto JS simple { k:v, ... } a dict Python"""
    # Buscar: clave: valor
    # Valor puede ser string "...", numero 123, o array [...]
    props = {}
    
    # 1. Strings
    for m in re.finditer(r'(\w+):\s*"([^"]*)"', js_str):
        props[m.group(1)] = m.group(2)
    
    # 2. Números (enteros o flotantes)
    for m in re.finditer(r'(\w+):\s*([\d\.]+)(?!")', js_str):
        try:
            props[m.group(1)] = float(m.group(2))
        except: pass

    # 3. Arrays [ ... ] (asumimos solo números dentro por simplicidad)
    for m in re.finditer(r'(\w+):\s*\[([^\]]*)\]', js_str):
        arr_str = m.group(2)
        arr = []
        if arr_str.strip():
            arr = [float(x.strip()) for x in arr_str.split(',') if x.strip()]
        props[m.group(1)] = arr

    return props

def main():
    try:
        with open(INPUT_FILE, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"❌ Error: No se encontró el archivo {INPUT_FILE}")
        return

    # Buscar el bloque DEFAULT_DATA
    match = re.search(r'const DEFAULT_DATA = (\[[\s\S]*?\]);', content)
    if not match:
        print("❌ Error: No se encontró DEFAULT_DATA en el HTML")
        return

    array_content = match.group(1)
    
    # Encontrar cada objeto {...}
    # Esto es un regex simple, asume que no hay llaves anidadas complejas
    events_raw = re.findall(r'\{([^\}]+)\}', array_content)
    
    events = []
    for raw in events_raw:
        obj = parse_js_obj(raw)
        if 'fecha' in obj and 'cliente' in obj:
            events.append(obj)
    
    print(f"✅ Se encontraron {len(events)} eventos válidos.")

    # Generar contenido ICS
    ics_lines = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//BrothersFilms//Eventos 2026//ES",
        "CALSCALE:GREGORIAN",
        "METHOD:PUBLISH",
        "X-WR-CALNAME:BrothersFilms 2026",
        "X-WR-TIMEZONE:America/Mexico_City"
    ]

    for i, e in enumerate(events):
        try:
            dt_start = datetime.datetime.strptime(e['fecha'], '%Y-%m-%d')
        except ValueError:
            print(f"⚠️ Fecha inválida para evento {i}: {e.get('fecha')}")
            continue
        
        # Evento de todo el día: DTEND es el día siguiente
        dt_end = dt_start + datetime.timedelta(days=1)
        
        start_str = dt_start.strftime('%Y%m%d')
        end_str = dt_end.strftime('%Y%m%d')
        now_str = datetime.datetime.now().strftime('%Y%m%dT%H%M%SZ')
        
        # Cálculos financieros
        contrato = e.get('contrato', 0)
        abonos = e.get('abonos', [])
        total_abonado = sum(abonos) if isinstance(abonos, list) else 0
        pendiente = contrato - total_abonado
        
        titulo = f"{e.get('tipo', 'Evento')} - {e.get('cliente')}"
        
        desc = (
            f"Cliente: {e.get('cliente')}\\n"
            f"Tipo: {e.get('tipo')}\\n"
            f"Servicio: {e.get('servicio', '-')}\\n"
            f"Salón: {e.get('salon', '-')}\\n"
            f"Ubicación: {e.get('ubicacion', '-')}\\n"
            f"--------------\\n"
            f"Contrato: ${contrato:,.2f}\\n"
            f"Abonado: ${total_abonado:,.2f}\\n"
            f"PENDIENTE: ${pendiente:,.2f}"
        )
        
        ubicacion = f"{e.get('salon', '')} {e.get('ubicacion', 'Saltillo')}".strip()

        ics_lines.extend([
            "BEGIN:VEVENT",
            f"UID:brothersfilms-2026-{i}-{start_str}",
            f"DTSTAMP:{now_str}",
            f"DTSTART;VALUE=DATE:{start_str}",
            f"DTEND;VALUE=DATE:{end_str}",
            f"SUMMARY:{titulo}",
            f"DESCRIPTION:{desc}",
            f"LOCATION:{ubicacion}",
            "STATUS:CONFIRMED",
            "TRANSP:TRANSPARENT",
            "END:VEVENT"
        ])

    ics_lines.append("END:VCALENDAR")

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write('\n'.join(ics_lines))

    print(f"✅ Archivo generado exitosamente en: {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
