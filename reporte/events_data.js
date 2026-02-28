const EXCEL_DATA = [
  {
    "id": 1,
    "fecha": "2023-02-05",
    "mes": "Febrero",
    "cliente": "Alejandra Paola",
    "tipo": "XV",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "Recepcion Lomas Lurdes",
    "contrato": 12500.0,
    "abonos": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 2,
    "fecha": "2023-03-18",
    "mes": "Marzo",
    "cliente": "Karol Kastro",
    "tipo": "XV",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "Villa Ferre",
    "contrato": 18500.0,
    "abonos": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 3,
    "fecha": "2023-04-29",
    "mes": "Abril",
    "cliente": "Mario + Mildred",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "Basico",
    "salon": "Museo de las aves",
    "contrato": 14500.0,
    "abonos": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 4,
    "fecha": "2023-05-06",
    "mes": "Mayo",
    "cliente": "Dafne Janeth",
    "tipo": "XV",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "Quinta los arcangeles",
    "contrato": 18500.0,
    "abonos": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 5,
    "fecha": "2023-05-06",
    "mes": "Mayo",
    "cliente": "Lucia + Tobias",
    "tipo": "BODA",
    "ubicacion": "Arteaga",
    "servicio": "Basico",
    "salon": "Hotel Arteaga",
    "contrato": 10000.0,
    "abonos": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 6,
    "fecha": "2023-05-07",
    "mes": "Mayo",
    "cliente": "Yesenia + Osiel",
    "tipo": "BODA",
    "ubicacion": "Arteaga",
    "servicio": "VIP",
    "salon": "Casa Antigua",
    "contrato": 21500.0,
    "abonos": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 7,
    "fecha": "2023-05-13",
    "mes": "Mayo",
    "cliente": "Daniela Monserrat",
    "tipo": "XV",
    "ubicacion": "San Antonio",
    "servicio": "VIP",
    "salon": "Rancho",
    "contrato": 18500.0,
    "abonos": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 8,
    "fecha": "2023-06-10",
    "mes": "Junio",
    "cliente": "Itzin Mazatan",
    "tipo": "XV",
    "ubicacion": "Saltillo",
    "servicio": "Basico",
    "salon": "Quinta los pastores",
    "contrato": 10500.0,
    "abonos": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 9,
    "fecha": "2023-06-17",
    "mes": "Junio",
    "cliente": "Anael Ramirez Canales",
    "tipo": "XV",
    "ubicacion": "Saltillo",
    "servicio": "Basico",
    "salon": "G&G",
    "contrato": 13500.0,
    "abonos": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 10,
    "fecha": "2023-06-24",
    "mes": "Junio",
    "cliente": "Sofia + Eduardo",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "Salon",
    "contrato": 19500.0,
    "abonos": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 11,
    "fecha": "2023-07-15",
    "mes": "Julio",
    "cliente": "Maylin Sanchez",
    "tipo": "XV",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "Real las palmas",
    "contrato": 18500.0,
    "abonos": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 12,
    "fecha": "2023-08-18",
    "mes": "Agosto",
    "cliente": "Jessica + Jose",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "Hacienda el secreto",
    "contrato": 19500.0,
    "abonos": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 13,
    "fecha": "2023-08-26",
    "mes": "Agosto",
    "cliente": "Rosalinda + Adrian",
    "tipo": "BODA",
    "ubicacion": "Arteaga",
    "servicio": "VIP",
    "salon": "Casa Antigua",
    "contrato": 19500.0,
    "abonos": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 14,
    "fecha": "2023-09-08",
    "mes": "Septiembre",
    "cliente": "Isabella Reyna",
    "tipo": "XV",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "Nogal",
    "contrato": 18500.0,
    "abonos": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 15,
    "fecha": "2023-09-23",
    "mes": "Septiembre",
    "cliente": "Estefania + Francisco",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "Quinta los arcangeles",
    "contrato": 19500.0,
    "abonos": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 16,
    "fecha": "2023-09-29",
    "mes": "Septiembre",
    "cliente": "Eli Yael",
    "tipo": "XV",
    "ubicacion": "Saltillo",
    "servicio": "Basico",
    "salon": "Salon Cortijo",
    "contrato": 14500.0,
    "abonos": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 17,
    "fecha": "2023-09-29",
    "mes": "Septiembre",
    "cliente": "Yael + Valeria",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "Hacienda el secreto",
    "contrato": 13500.0,
    "abonos": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 18,
    "fecha": "2023-10-14",
    "mes": "Octubre",
    "cliente": "Atziri + Gabriel",
    "tipo": "BODA",
    "ubicacion": "Arteaga",
    "servicio": "VIP",
    "salon": "Casa Antigua",
    "contrato": 19500.0,
    "abonos": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 19,
    "fecha": "2023-10-21",
    "mes": "Octubre",
    "cliente": "Edgar + Carolina",
    "tipo": "BODA",
    "ubicacion": "Arteaga",
    "servicio": "VIP",
    "salon": "Casa Antigua",
    "contrato": 19500.0,
    "abonos": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 20,
    "fecha": "2023-10-27",
    "mes": "Octubre",
    "cliente": "Ricardo + Sarahi",
    "tipo": "BODA",
    "ubicacion": "Arteaga",
    "servicio": "VIP",
    "salon": "Casa Antigua",
    "contrato": 19500.0,
    "abonos": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 21,
    "fecha": "2024-02-03",
    "mes": "Febrero",
    "cliente": "Andrea y miguel",
    "tipo": "BODA",
    "ubicacion": "Arteaga",
    "servicio": "Especial",
    "salon": "Casa Antigua",
    "contrato": 8500.0,
    "abonos": [
      8500.0,
      4250.0,
      4250.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 22,
    "fecha": "2024-02-24",
    "mes": "Febrero",
    "cliente": "Ashanti Camila",
    "tipo": "XV",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "Villa Toscana",
    "contrato": 19500.0,
    "abonos": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 23,
    "fecha": "2024-03-16",
    "mes": "Marzo",
    "cliente": "Daniel + Nataly",
    "tipo": "BODA",
    "ubicacion": "Parras",
    "servicio": "VIP",
    "salon": "Quinta Capricho",
    "contrato": 22700.0,
    "abonos": [
      5890.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 24,
    "fecha": "2024-04-12",
    "mes": "Abril",
    "cliente": "Mia Regina",
    "tipo": "XV",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "Alborada",
    "contrato": 21500.0,
    "abonos": [
      0.0,
      4500.0,
      5000.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 25,
    "fecha": "2024-04-13",
    "mes": "Abril",
    "cliente": "Alisson Mariel",
    "tipo": "XV",
    "ubicacion": "Arteaga",
    "servicio": "VIP",
    "salon": "Hacienda San Fernando",
    "contrato": 21300.0,
    "abonos": [
      5400.0,
      1000.0,
      5000.0,
      7900.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 26,
    "fecha": "2024-04-26",
    "mes": "Abril",
    "cliente": "Karina + Hector",
    "tipo": "BODA",
    "ubicacion": "Arteaga",
    "servicio": "VIP",
    "salon": "Casa Antigua",
    "contrato": 19350.0,
    "abonos": [
      3000.0,
      4000.0,
      9350.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 27,
    "fecha": "2024-04-26",
    "mes": "Abril",
    "cliente": "Graciela Aguirre",
    "tipo": "XV",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "El mimbre",
    "contrato": 19500.0,
    "abonos": [
      0.0,
      0.0,
      4500.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 28,
    "fecha": "2024-05-18",
    "mes": "Mayo",
    "cliente": "Trinidad + Juan",
    "tipo": "BODA",
    "ubicacion": "Arteaga",
    "servicio": "VIP",
    "salon": "Casa Antigua",
    "contrato": 21500.0,
    "abonos": [
      5850.0,
      2900.0,
      10750.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 29,
    "fecha": "2024-05-25",
    "mes": "Mayo",
    "cliente": "Karla + Javier",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "Villa de Santa Fe",
    "contrato": 19500.0,
    "abonos": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 30,
    "fecha": "2024-06-15",
    "mes": "Junio",
    "cliente": "Ximena y Diego",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "Casa Antigua",
    "contrato": 0.0,
    "abonos": [
      500.0,
      1000.0,
      10000.0,
      8750.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 31,
    "fecha": "2024-07-13",
    "mes": "Julio",
    "cliente": "Berenice Y Julio",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "Casa Antigua",
    "contrato": 22500.0,
    "abonos": [
      12500.0,
      10000.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 32,
    "fecha": "2024-07-20",
    "mes": "Julio",
    "cliente": "Victor +  Francisco",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "Museo del desierto",
    "contrato": 18500.0,
    "abonos": [
      5500.0,
      8000.0,
      4000.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 33,
    "fecha": "2024-08-09",
    "mes": "Agosto",
    "cliente": "Rebeca Y Jordi",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "Hacienda Saguaro",
    "contrato": 22500.0,
    "abonos": [
      2000.0,
      10000.0,
      5500.0,
      5000.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 34,
    "fecha": "2024-08-17",
    "mes": "Agosto",
    "cliente": "Jose Roberto y Ana Lucia",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "Quinta Tamara",
    "contrato": 20250.0,
    "abonos": [
      1500.0,
      10000.0,
      8750.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 35,
    "fecha": "2024-08-23",
    "mes": "Agosto",
    "cliente": "Elizabeth + Cesar",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "El recuerdo",
    "contrato": 19350.0,
    "abonos": [
      4000.0,
      4000.0,
      5350.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 36,
    "fecha": "2024-08-31",
    "mes": "Agosto",
    "cliente": "Ana y Diego",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "Quinta los arcangeles",
    "contrato": 20250.0,
    "abonos": [
      5000.0,
      15250.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 37,
    "fecha": "2024-09-07",
    "mes": "Septiembre",
    "cliente": "Victoria + Vicente",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "Nogal",
    "contrato": 0.0,
    "abonos": [
      5300.0,
      2000.0,
      5700.0,
      6000.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 38,
    "fecha": "2024-09-15",
    "mes": "Septiembre",
    "cliente": "Lidya Elisa",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "Especial",
    "salon": "Hacienda el secreto",
    "contrato": 8500.0,
    "abonos": [
      2000.0,
      6500.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 39,
    "fecha": "2024-10-12",
    "mes": "Octubre",
    "cliente": "Devany XV",
    "tipo": "XV",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "Villa Toscana",
    "contrato": 21500.0,
    "abonos": [
      21500.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 40,
    "fecha": "2024-10-19",
    "mes": "Octubre",
    "cliente": "Hector Y Fernanda",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "Quinta los pastores",
    "contrato": 20250.0,
    "abonos": [
      500.0,
      1500.0,
      4600.0,
      6000.0,
      7650.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 41,
    "fecha": "2024-11-23",
    "mes": "Noviembre",
    "cliente": "Fernanda XV",
    "tipo": "XV",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "Villa Toscana",
    "contrato": 19350.0,
    "abonos": [
      1000.0,
      1500.0,
      5000.0,
      3000.0,
      8850.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 42,
    "fecha": "2024-12-21",
    "mes": "Diciembre",
    "cliente": "Ana Cecilia y Victor Manuel",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "Estandar",
    "salon": "Museo de las aves",
    "contrato": 22500.0,
    "abonos": [
      2000.0,
      2000.0,
      6000.0,
      2000.0,
      10500.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 43,
    "fecha": "2024-12-28",
    "mes": "Enero",
    "cliente": "Michelle & Eder",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "Especial",
    "salon": "Hacienda Concepcion",
    "contrato": 17550.0,
    "abonos": [
      9000.0,
      8550.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 44,
    "fecha": "2025-03-14",
    "mes": "Marzo",
    "cliente": "Jorge & Selene",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "Los membrillos",
    "contrato": 22500.0,
    "abonos": [
      500.0,
      2000.0,
      4500.0,
      4400.0,
      11100.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 45,
    "fecha": "2025-04-05",
    "mes": "Abril",
    "cliente": "Rosa Mariana",
    "tipo": "XV",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "Los membrillos",
    "contrato": 25500.0,
    "abonos": [
      15000.0,
      10500.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 46,
    "fecha": "2025-05-24",
    "mes": "Mayo",
    "cliente": "Danna y Miguel",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "",
    "contrato": 22500.0,
    "abonos": [
      1500.0,
      5250.0,
      2500.0,
      1500.0,
      3500.0,
      2000.0,
      6250.0
    ]
  },
  {
    "id": 47,
    "fecha": "2025-05-24",
    "mes": "Mayo",
    "cliente": "Kattia y Carlos",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "Real las palmas",
    "contrato": 22500.0,
    "abonos": [
      2300.0,
      4600.0,
      4575.0,
      11475.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 48,
    "fecha": "2025-05-30",
    "mes": "Mayo",
    "cliente": "Debani y Luis",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "El Jardin Arteaga",
    "contrato": 25500.0,
    "abonos": [
      1500.0,
      11250.0,
      7750.0,
      5000.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 49,
    "fecha": "2025-06-13",
    "mes": "Junio",
    "cliente": "Katia y Eduardo",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "",
    "contrato": 22950.0,
    "abonos": [
      6800.0,
      16150.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 50,
    "fecha": "2025-06-21",
    "mes": "Junio",
    "cliente": "Anahi y Fernando",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "",
    "contrato": 22500.0,
    "abonos": [
      2550.0,
      10000.0,
      12950.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 51,
    "fecha": "2025-07-11",
    "mes": "Julio",
    "cliente": "Fernanda & Carlos",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "Jardin el Recuerdo",
    "contrato": 25500.0,
    "abonos": [
      1500.0,
      5000.0,
      9500.0,
      9500.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 52,
    "fecha": "2025-07-19",
    "mes": "Julio",
    "cliente": "Jorge & Vanesa",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "",
    "contrato": 22950.0,
    "abonos": [
      1500.0,
      2000.0,
      4000.0,
      14750.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 53,
    "fecha": "2025-08-22",
    "mes": "Agosto",
    "cliente": "Renata Reyna Ramos",
    "tipo": "XV",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "Alpha Green Eventos",
    "contrato": 25925.0,
    "abonos": [
      500.0,
      25425.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 54,
    "fecha": "2025-08-23",
    "mes": "Agosto",
    "cliente": "Adriana y Oscar",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "Hacienda el secreto",
    "contrato": 22500.0,
    "abonos": [
      1500.0,
      5250.0,
      1500.0,
      1500.0,
      1500.0,
      2000.0,
      9250.0
    ]
  },
  {
    "id": 55,
    "fecha": "2025-08-29",
    "mes": "Agosto",
    "cliente": "Wendi & Felix",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "Hacienda el secreto",
    "contrato": 25500.0,
    "abonos": [
      25500.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 56,
    "fecha": "2025-09-13",
    "mes": "Septiembre",
    "cliente": "Alan & Maria",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "Quinta Real",
    "contrato": 28975.0,
    "abonos": [
      3000.0,
      25975.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 57,
    "fecha": "2025-09-27",
    "mes": "Septiembre",
    "cliente": "XV Hija de Mauricio Lopez",
    "tipo": "XV",
    "ubicacion": "Arteaga",
    "servicio": "VIP",
    "salon": "",
    "contrato": 22950.0,
    "abonos": [
      2000.0,
      3000.0,
      5000.0,
      6000.0,
      6950.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 58,
    "fecha": "2025-10-11",
    "mes": "Octubre",
    "cliente": "Ana Sofia XV",
    "tipo": "XV",
    "ubicacion": "Saltillo",
    "servicio": "Estandar",
    "salon": "",
    "contrato": 0.0,
    "abonos": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 59,
    "fecha": "2025-10-18",
    "mes": "Octubre",
    "cliente": "Alejandro & Cristina",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "VIP",
    "salon": "Quinta Real",
    "contrato": 22950.0,
    "abonos": [
      2000.0,
      7000.0,
      13950.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 60,
    "fecha": "2025-10-25",
    "mes": "Octubre",
    "cliente": "Majo & Ernesto",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "Premium",
    "salon": "Villa de Santa Fe",
    "contrato": 25500.0,
    "abonos": [
      2500.0,
      10000.0,
      13000.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 61,
    "fecha": "2026-04-10",
    "mes": "Abril",
    "cliente": "Carlos y Ana Victoria",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "Premium",
    "salon": "",
    "contrato": 27450.0,
    "abonos": [
      8000.0,
      2500.0,
      2000.0,
      4000.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 62,
    "fecha": "2026-06-27",
    "mes": "Junio",
    "cliente": "Andrea y Aldo",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "Estandar",
    "salon": "",
    "contrato": 25500.0,
    "abonos": [
      2500.0,
      5150.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 63,
    "fecha": "2026-08-15",
    "mes": "Agosto",
    "cliente": "Alejandra & Miguel",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "Estandar",
    "salon": "",
    "contrato": 26500.0,
    "abonos": [
      3000.0,
      5000.0,
      5250.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 64,
    "fecha": "2026-10-31",
    "mes": "Octubre",
    "cliente": "Ana & Johan",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "Premium",
    "salon": "",
    "contrato": 32500.0,
    "abonos": [
      3250.0,
      13000.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 65,
    "fecha": "2026-05-01",
    "mes": "Mayo",
    "cliente": "Isaias & Daniela",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "Premium",
    "salon": "",
    "contrato": 29250.0,
    "abonos": [
      7500.0,
      10000.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 66,
    "fecha": "2026-05-09",
    "mes": "Mayo",
    "cliente": "Hirochy & Valeria",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "Estandar",
    "salon": "",
    "contrato": 22000.0,
    "abonos": [
      2500.0,
      4100.0,
      15400.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 67,
    "fecha": "2026-05-09",
    "mes": "Mayo",
    "cliente": "Renata XV",
    "tipo": "XV",
    "ubicacion": "Saltillo",
    "servicio": "Basico",
    "salon": "",
    "contrato": 19500.0,
    "abonos": [
      2000.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 68,
    "fecha": "2026-08-08",
    "mes": "Agosto",
    "cliente": "Yudith & Salvador",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "Estandar",
    "salon": "",
    "contrato": 22950.0,
    "abonos": [
      2000.0,
      4885.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 69,
    "fecha": "2026-10-10",
    "mes": "Octubre",
    "cliente": "Victor & Alondra",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "Premium",
    "salon": "",
    "contrato": 29250.0,
    "abonos": [
      3000.0,
      5775.0,
      3475.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 70,
    "fecha": "2026-07-04",
    "mes": "Julio",
    "cliente": "Regina XV",
    "tipo": "XV",
    "ubicacion": "Saltillo",
    "servicio": "Premium",
    "salon": "",
    "contrato": 25925.0,
    "abonos": [
      2600.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 71,
    "fecha": "2026-07-18",
    "mes": "Julio",
    "cliente": "Marzell & Ivan",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "Basico",
    "salon": "",
    "contrato": 19500.0,
    "abonos": [
      2000.0,
      4000.0,
      3500.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 72,
    "fecha": "2026-05-23",
    "mes": "Mayo",
    "cliente": "Asaf & Dulce",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "Premium",
    "salon": "",
    "contrato": 32500.0,
    "abonos": [
      3000.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 73,
    "fecha": "2026-04-18",
    "mes": "Abril",
    "cliente": "Sofia XV",
    "tipo": "XV",
    "ubicacion": "Saltillo",
    "servicio": "Rock Star",
    "salon": "Casa Mia",
    "contrato": 27450.0,
    "abonos": [
      2747.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 74,
    "fecha": "2026-07-25",
    "mes": "Julio",
    "cliente": "Adriana XV",
    "tipo": "XV",
    "ubicacion": "Saltillo",
    "servicio": "Estandar",
    "salon": "",
    "contrato": 23050.0,
    "abonos": [
      3000.0,
      5000.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  },
  {
    "id": 75,
    "fecha": "2026-04-25",
    "mes": "Abril",
    "cliente": "Marco &. Marisol",
    "tipo": "BODA",
    "ubicacion": "Saltillo",
    "servicio": "Premium",
    "salon": "Membrillos",
    "contrato": 24500.0,
    "abonos": [
      2450.0,
      10800.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ]
  }
];