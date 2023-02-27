from flask import Flask, jsonify, request


app = Flask(__name__)


datas = [
    {
        'schedule': [
            {
                'id': 'int',
                'date': '2023-02-25',  # -> YYYY-MM-DD
                'time_id': 'int',
                'cpf': 'str',
                'quadra': 'str',
                'value': 'float',
                'status_payment': 'bool',  # -> pago ou nao
                'type_hour': 'int'  # -> 1 ou 3 horas
            },
        ],
        'client': [
            {
                'cpf': 'str',
                'name': 'str',
                'cell_number': 'str'
            },
        ],
        'appointment': [
            {
                'id_hour': 1,
                'hour': '09:00:00 - 10:00:00'  # -> HH:MM:SS
            },
            {
                'id_hour': 2,
                'hour': '10:00:00 - 11:00:00'  # -> HH:MM:SS
            },
            {
                'id_hour': 3,
                'hour': '11:00:00 - 12:00:00'  # -> HH:MM:SS
            },
            {
                'id_hour': 4,
                'hour': '12:00:00 - 13:00:00'  # -> HH:MM:SS
            },
            {
                'id_hour': 5,
                'hour': '13:00:00 - 14:00:00'  # -> HH:MM:SS
            },
            {
                'id_hour': 6,
                'hour': '14:00:00 - 15:00:00'  # -> HH:MM:SS
            },
            {
                'id_hour': 7,
                'hour': '15:00:00 - 16:00:00'  # -> HH:MM:SS
            },
            {
                'id_hour': 8,
                'hour': '16:00:00 - 17:00:00'  # -> HH:MM:SS
            },
            {
                'id_hour': 9,
                'hour': '17:00:00 - 18:00:00'  # -> HH:MM:SS
            },
            {
                'id_hour': 10,
                'hour': '18:00:00 - 19:00:00'  # -> HH:MM:SS
            },
            {
                'id_hour': 11,
                'hour': '19:00:00 - 20:00:00'  # -> HH:MM:SS
            },
            {
                'id_hour': 12,
                'hour': '20:00:00 - 21:00:00'  # -> HH:MM:SS
            },
            {
                'id_hour': 13,
                'hour': '21:00:00 - 22:00:00'  # -> HH:MM:SS
            },
        ]
    }
]


#  Consulta de todos os dados do BD.
@app.route('/api/datas', methods=['GET'])
def get_datas():
    return jsonify(datas)


# Consulta de todos os dados da agenda.
@app.route('/api/schedule', methods=['GET'])
def get_schedule_datas():
    for data in datas:
        return jsonify(data['schedule'])


# Adicionando novos dados na agenda.
@app.route('/api/schedule', methods=['POST'])
def post_new_data():
    new_datas = request.get_json()
    for data in datas:
        data['schedule'].append(new_datas)
        return jsonify(data['schedule'])


# Consulta de dados passando a data (YYYY-MM-DD) como parâmetro.
@app.route('/api/schedule/<date>', methods=['GET'])
def get_datas_by_date(date):
    for data in datas:
        for item in data['schedule']:
            if item.get('date') == date:
                return jsonify(item)


# Consulta de todos os clientes.
@app.route('/api/client', methods=['GET'])
def get_client_datas():
    for data in datas:
        return jsonify(data['client'])


# Adicionando novo cliente.
@app.route('/api/client', methods=['POST'])
def post_new_client_datas():
    new_client_datas = request.get_json()
    for data in datas:
        data['client'].append(new_client_datas)
        return jsonify(data['client'])


# Consulta de clientes passando o cpf como parâmetro.
@app.route('/api/client/<cpf>', methods=['GET'])
def get_clients_by_cpf(cpf):
    for data in datas:
        for item in data['client']:
            if item.get('cpf') == cpf:
                return jsonify(item)


# Consulta de todos os horários.
@app.route('/api/appointment', methods=['GET'])
def get_appointment_datas():
    for data in datas:
        return jsonify(data['appointment'])


# Consulta de horários passando id como parâmetro.
@app.route('/api/appointment/<int:id>', methods=['GET'])
def get_appointment_by_id(id):
    for data in datas:
        for item in data['appointment']:
            if item.get('id_hour') == id:
                return jsonify(item)


app.run(port='5000', host='localhost', debug=True)
