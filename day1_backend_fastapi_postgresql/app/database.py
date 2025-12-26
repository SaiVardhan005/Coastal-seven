import psycopg2

conn = psycopg2.connect(
    dbname="coastal_backend",
    user="postgres",
    password="@Sai00502",
    host="localhost",
    port="5432"
)

cursor = conn.cursor()
