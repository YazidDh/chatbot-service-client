import pandas as pd
import matplotlib.pyplot as plt

file = './amazon/amazon2_results.csv'

data = pd.read_csv(file)

training_loss = data["training_loss"]
step = data["step"]

plt.plot(step, training_loss)
plt.xlabel('training steps')
plt.ylabel('loss')
plt.title('amazon loss')




# Display the plot
plt.show()
