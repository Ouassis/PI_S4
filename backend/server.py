from flask import Flask
import numpy as np 
import pandas as pd 
from xgboost import XGBClassifier

app=Flask(__name__)

@app.route('/')
def show_acru():
    return "hello"

if __name__ == '__main__':
    app.run(debug=True)
    
    
def getResult(list):
    #exemple of list 
    #nodal_skin_eruptions           1
    #shivering                      0
    #ulcers_on_tongue               0
    #muscle_wasting                 0
    #spotting_ urination            0
    #......
    
    data_test= pd.read_csv("./TestingXGB.csv")
    data_train= pd.read_csv("./TrainingXGB.csv")
    
    X_test=data_test.loc[:,data_test.columns !="prognosis"]
    Y_test=data_test["prognosis"]
    X_train=data_train.loc[:,data_train.columns !="prognosis"]
    Y_train=data_train["prognosis"]

    model = XGBClassifier() 
    model.fit(X_train, Y_train)

    #model.predict(pd.DataFrame(list).transpose())[0]
    return model.predict(pd.DataFrame(list).transpose())[0];
    




