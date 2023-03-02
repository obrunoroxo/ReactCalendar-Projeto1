import sqlite3, logging, json


class LocalDataBase:
    def __init__(self, bd_sqlite: str = 'bancoagenda'):
        self.bd_sqlite = bd_sqlite

    def openConnectionDB(self):
        try:
            connection = sqlite3.connect(self.bd_sqlite)
            connection.row_factory = sqlite3.Row
            cursor = connection.cursor()

            return connection, cursor

        except:
            logging.warning(' Falha na conexão ao banco SQLITE.')


    def clientConsult(self):
        connection, cursor = self.openConnectionDB()
        rows = cursor.execute('SELECT * FROM cliente').fetchall()

        all_clients = json.dumps( [dict(row) for row in rows] )

        return print(json.loads(all_clients))


    ### Verificar como realizar o cadastro
    # def clientRegister(self):
    #     connection, cursor = self.openConnectionDB()
    #     rows = cursor.execute('''INSERT OR IGNORE INTO cliente (cpf, nome, tel) VALUES (?,?,?)''', (cpf, nome, tel)).fetchall()


    def hoursConsult(self):
        connection, cursor = self.openConnectionDB()
        rows = cursor.execute('SELECT * FROM agenda').fetchall()

        all_hours = json.dumps( [dict(row) for row in rows] )

        return print(json.loads(all_hours))

if __name__ == '__main__':
    LocalDataBase().hoursConsult()
    # teste.cadastroClient()
