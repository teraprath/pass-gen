import eel
import random
import string

eel.init('web')

digits = list(string.digits)
alphabets = list(string.ascii_letters)
specialchars = list("!@#$%^&*()")

@eel.expose
def generatePassword(length, allow_digits, allow_alphabets, allow_specialchars):
    length = int(length)
    
    password = []
    chars = []
    password_string = ""

    if allow_digits == True:
        chars += digits
    if allow_alphabets == True:
        chars += alphabets
    if allow_specialchars == True:
        chars += specialchars

    for i in range(length):
        password.append(random.choice(chars))

    random.shuffle(password)

    for i in password:
        password_string += i
        
    return password_string

eel.start('index.html', mode=False, port=5500)