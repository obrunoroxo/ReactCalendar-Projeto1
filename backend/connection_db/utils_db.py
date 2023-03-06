import sqlite3
import logging


def openConnectionDB():
    try:
        connection = sqlite3.connect('./connection_db/bancoagenda')
        cursor = connection.cursor()

        return connection, cursor

    except:
        logging.warning(' Failed in the connection to the SQLITE data base.')


def scheduleConsult():
    _, cursor = openConnectionDB()
    response = cursor.execute('SELECT * FROM agenda').fetchall()

    return response


def clientConsult():
    _, cursor = openConnectionDB()
    response = cursor.execute('SELECT * FROM cliente').fetchall()

    return response


def clientRegister(cpf, nome, tel):
    connection, cursor = openConnectionDB()
    response = cursor.execute(
        f'INSERT OR IGNORE INTO cliente (cpf, nome, tel) VALUES ("{cpf}","{nome}","{tel}")'
    )

    connection.commit()

    return response


def appointmentConsult():
    _, cursor = openConnectionDB()
    response = cursor.execute('SELECT * FROM horarios').fetchall()

    return response


# if __name__ == '__main__':
    # clientConsult()