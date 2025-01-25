# -*- coding: utf-8 -*-
"""
Created on Feb 2021

@author: Natata
"""

import numpy as np
import matplotlib.pyplot as plt
import scipy.io.wavfile as waves
import csv
import pandas as pd

file = 'TimBrain_VisualCortex_BYB_Recording.wav'
fs, data = waves.read(file)

length_data=np.shape(data)
length_new=length_data[0]*0.05
ld_int=int(length_new)
from scipy import signal
data_new=signal.resample(data,ld_int)

plt.figure('Spectrogram')
d, f, t, im = plt.specgram(data_new, NFFT= 256, Fs=500, noverlap=250)
plt.ylim(0,90)
plt.colorbar(label= "Power/Frequency")
plt.ylabel('Frequency [Hz]')
plt.xlabel('Time [s]')
plt.show()

matrixf=np.array(f).T
np.savetxt('Frequencies.csv', matrixf)
df = pd.read_csv("Frequencies.csv", header=None, index_col=None)
df.columns = ["Frequencies"]
df.to_csv("Frequencies.csv", index=False)

length_d=np.shape(d)
l_col_d=length_d[1]
AlphaRange=[]
for i in range(0,l_col_d):
    AlphaRange.append(np.mean(d[4:7,i]))

def smoothTriangle(data, degree):
    triangle=np.concatenate((np.arange(degree + 1), np.arange(degree)[::-1])) # up then down
    smoothed=[]

    for i in range(degree, len(data) - degree * 2):
        point=data[i:i + len(triangle)] * triangle
        smoothed.append(np.sum(point)/np.sum(triangle))
    # Handle boundaries
    smoothed=[smoothed[0]]*int(degree + degree/2) + smoothed
    while len(smoothed) < len(data):
        smoothed.append(smoothed[-1])
    return smoothed


AlphaRange_norm=np.linalg.norm(np.array(AlphaRange))
AR_normalized=np.array(AlphaRange)*(1/AlphaRange_norm)

plt.figure('AlphaRange')
y=smoothTriangle(AR_normalized, 100)
plt.plot(t, y)
plt.xlabel('Time [s]')
plt.xlim(0,max(t))

datosy=np.asarray(y)
datosyt=np.array(
        [
        datosy,
        t
        ])
with open ('datosyt.csv', 'w', newline='') as file:
    writer=csv.writer(file, dialect='excel-tab')
    writer.writerows(datosyt.T)
    

df = pd.read_csv("datosyt.csv", header=None, index_col=None)
df.columns = ["Power                   Time"]
df.to_csv("datosyt.csv", index=False)

matrixy=np.asarray(y)

ec1=np.mean(matrixy[333:1225])
eo1=np.mean(matrixy[1224:1920])
ec2=np.mean(matrixy[1919:2988])
eo2= np.mean(matrixy[2987:3769])
ec3=np.mean(matrixy[3768:4928])
eo3=np.mean(matrixy[4927:5983])
ec4=np.mean(matrixy[5982:7064])
eo4=np.mean(matrixy[7063:8047])

eyesopen=np.array([eo1, eo2, eo3, eo4])
eyesclosed=np.array([ec1, ec2, ec3, ec4])

plt.figure('DataAnalysis')
plt.boxplot([eyesopen, eyesclosed], sym = 'ko', whis = 1.5)
plt.xticks([1,2], ['Eyes open', 'Eyes closed'], size = 'small', color = 'k')
plt.ylabel('AlphaPower')


from scipy import stats
stats.ttest_ind(eyesopen, eyesclosed, equal_var = False)

