#entrada de dados
altura = float(input("Digite sua altura:"))
peso = float(input("digite seu peso"))

#processameto de dados
imc = peso / (altura * altura)

#saida 
print(imc)
if imc < 15:
    print("muito magro")
elif imc < 18.5:
    print("magreza leve")
elif imc < 24.9:
    print("peso normal")
elif imc < 29.9:
     print("acima do peso")
elif imc < 39.8:
    print("obsidade I")
elif imc < 40:
    print("obsidade II")
else:
    print("obsidade III")