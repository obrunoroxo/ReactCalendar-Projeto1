from flask_cors import CORS

from flask import (
    Flask,
    request,
    jsonify,
    make_response
)

from connection_db.utils_db import (
    clientConsult,
    clientRegister,
    scheduleConsult,
    appointmentConsult,
)


app = Flask(__name__)
CORS(app)


# Consulta todos os dados do banco de dados.
@app.route('/api/datas', methods=['GET'])
def get_all_datas():
    datas_schedule = scheduleConsult()
    client_datas = clientConsult()
    appointment_datas = appointmentConsult()

    schedule_list = [
        {
            'idAgenda': data[0],
            'data': data[1],
            'idHora': data[2],
            'cpf': data[3],
            'quadra': data[4],
            'valor': data[5],
            'pago': data[6],
            'tipoHora': data[7]
        }
        for data in datas_schedule
    ]

    client_list = [
        {
            'cpf': data[0],
            'nome': data[1],
            'tel': data[2],
        }
        for data in client_datas
    ]

    appointment_list = [
        {
            'idHora': data[0],
            'horario': data[1]
        }
        for data in appointment_datas
    ]

    teste = make_response(
        jsonify(
            message='All datas in the data base.',
            schedule=schedule_list,
            client=client_list,
            appointment=appointment_list
        )
    )

    teste.headers.add("Access-Control-Allow-Origin", "*")

    return teste


# Consulta de todos os dados da agenda.
@app.route('/api/schedule', methods=['GET'])
def get_all_schedules():
    datas_schedule = scheduleConsult()

    schedule_list = [
        {
            'idAgenda': data[0],
            'data': data[1],
            'idHora': data[2],
            'cpf': data[3],
            'quadra': data[4],
            'valor': data[5],
            'pago': data[6],
            'tipoHora': data[7]
        }
        for data in datas_schedule
    ]

    return make_response(
        jsonify(
            message='All schedule data in data base.',
            response=schedule_list
        )
    )


# Consulta de todos os clientes.
@app.route('/api/client', methods=['GET'])
def get_client_datas():
    client_datas = clientConsult()

    client_list = [
        {
            'cpf': data[0],
            'nome': data[1],
            'tel': data[2],
        }
        for data in client_datas
    ]

    return make_response(
        jsonify(
            message='All client datas in data base.',
            response=client_list
        )
    )


# Adicionando novo cliente.
@app.route('/api/client', methods=['POST'])
def post_new_client_datas():
    new_client_datas = request.get_json()

    clientRegister(
        tel=new_client_datas['tel'],
        nome=new_client_datas['nome'],
        cpf=new_client_datas['cpf']
    )

    return make_response(
        jsonify(
            message='Client data registered successfully.',
            response=new_client_datas
        )
    )


# Consulta dos horarios.
@app.route('/api/appointment', methods=['GET'])
def get_appointment_datas():
    appointment_datas = appointmentConsult()

    appointment_list = [
        {
            'idHora': data[0],
            'horario': data[1]
        }
        for data in appointment_datas
    ]

    return make_response(
        jsonify(
            message='All appointment datas in data base.',
            response=appointment_list
        )
    )


app.run(port='5000', host='0.0.0.0')
