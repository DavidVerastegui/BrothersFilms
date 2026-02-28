import pandas as pd
import json
import datetime
import math

file_path = '/Users/davidverastegui/Desktop/BackUp_LastUpdateBaseDatosBrothersFilms2024-2025.xlsx'
sheet_name = 'Eventos (2024-2025-2026)'

# Read excel sheet
df = pd.read_excel(file_path, sheet_name=sheet_name)

# Replace numeric NaN with 0 before where operation
for col in ['ServicePrice', 'Deposit1', 'Deposit2', 'Deposit3', 'Deposit4', 'Deposit5', 'Deposit6', 'Deposit7']:
    if col in df.columns:
        df[col] = pd.to_numeric(df[col], errors='coerce').fillna(0)

# Fill other nan with None
df = df.where(pd.notnull(df), None)

eventos = []
next_id = 1

MONTH_ORDER_MAP = {
    'enero': 'Enero', 'febrero': 'Febrero', 'marzo': 'Marzo', 'abril': 'Abril', 
    'mayo': 'Mayo', 'junio': 'Junio', 'julio': 'Julio', 'agosto': 'Agosto', 
    'septiembre': 'Septiembre', 'octubre': 'Octubre', 'noviembre': 'Noviembre', 'diciembre': 'Diciembre'
}

for index, row in df.iterrows():
    # Only process rows with a ClientName
    cliente = row.get('ClientName')
    if not cliente or pd.isna(cliente) or cliente == '':
        continue
        
    fecha_val = row.get('DATE')
    fecha_str = ''
    if isinstance(fecha_val, datetime.datetime) or isinstance(fecha_val, pd.Timestamp):
        fecha_str = fecha_val.strftime('%Y-%m-%d')
    elif isinstance(fecha_val, str):
        fecha_str = fecha_val
        
    mes_str = str(row.get('Month_Name') or '').lower().strip()
    mes_formateado = MONTH_ORDER_MAP.get(mes_str, 'Enero')
        
    tipo_raw = str(row.get('EventType') or '').upper()
    if 'BODA' in tipo_raw:
        tipo = 'BODA'
    elif 'XV' in tipo_raw:
        tipo = 'XV'
    else:
        tipo = 'OTRO'
        
    contrato = float(row.get('ServicePrice') or 0)
    
    # Abonos
    a1 = float(row.get('Deposit1') or 0)
    a2 = float(row.get('Deposit2') or 0)
    a3 = float(row.get('Deposit3') or 0)
    a4 = float(row.get('Deposit4') or 0)
    a5 = float(row.get('Deposit5') or 0)
    a6 = float(row.get('Deposit6') or 0)
    a7 = float(row.get('Deposit7') or 0)
    
    # We have space for up to 7 deposits, maybe we sum 6 and 7? In HTML we had 6, let's keep 7
    abonos_list = [a1, a2, a3, a4, a5, a6, a7]
    
    eventos.append({
        'id': next_id,
        'fecha': fecha_str,
        'mes': mes_formateado,
        'cliente': str(cliente).strip(),
        'tipo': tipo,
        'ubicacion': str(row.get('Location') or 'Saltillo').strip(),
        'servicio': str(row.get('Service') or 'Estandar').strip(),
        'salon': str(row.get('EventHall') or '').strip(),
        'contrato': contrato,
        'abonos': abonos_list
    })
    next_id += 1

js_content = f"const EXCEL_DATA = {json.dumps(eventos, indent=2, ensure_ascii=False)};"

with open('/Users/davidverastegui/.gemini/antigravity/scratch/brothersfilms-reporte/events_data.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Extracted {len(eventos)} events to events_data.js")
