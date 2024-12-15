def greet(languages):
    
    greetings = {
        "english": "Welcome",
        "german": "Wellkommen",
        "italian": "Benvenuto",
        "polish": "Witamy",
        "spanish": "Hola",
        "swedish": "Valkommen",
        "georgian": "Gamarjoba"
    }
    
    return greetings("english" , "german" , "italian" , "polish")