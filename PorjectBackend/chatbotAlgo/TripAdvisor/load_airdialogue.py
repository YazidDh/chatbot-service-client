import json

from datasets import load_dataset

output_file = 'tripAdvisor_prompt_completion.json'


dataset = load_dataset("air_dialogue")
print(dataset.shape)
dataset = load_dataset("air_dialogue")
train_dataset = dataset["train"]
dialogues = train_dataset["dialogue"]

prompts_and_completions = []
for i in range(500):
    for j in range(0, len(dialogues[i])-1, 2):
        prompt = dialogues[i][j]
        completion = dialogues[i][j+1]
        prompts_and_completions.append({"prompt": prompt, "completion": completion})




with open(output_file, 'w') as f:
    json.dump(prompts_and_completions, f, indent=4)





