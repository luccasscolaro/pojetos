#Algoritmo que tabuada de numero
numero =int(input("coloca um numero ai"))
def multiplicar(numero):
    for i in range(0,11):
        print(numero,"x",i," = ",numero * i)
# multiplicar(numero)
def verificarpar(numero):
    if numero % 2 == 0:
        print("e um numero par")
    else:
        print("e um numero impar")
verificarpar(numero)