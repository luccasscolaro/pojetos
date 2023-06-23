precoAlcool = float(input("valor do alcool"))
precoGasolina = float(input("valor do gasolina"))

resultado= precoAlcool / precoGasolina

print(resultado)

if resultado >0.7:
    print("abasteça com gasolina")
else:
    print("abasteça com alcool")