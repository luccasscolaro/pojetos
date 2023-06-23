nota1 = float(input("Digite sua nota:"))
nota2 = float(input("Digite sua nota:"))
nota3 = float(input("Digite sua nota:"))
nota4 = float(input("Digite sua nota:"))

final = (nota1+nota2+nota3+nota4) /4

print(final)
if final < 60:
    print("asim não viado")
elif final < 70:
    print("ta no caminho")
elif final < 80:
    print(" isso ai")
else:
    print("passou")