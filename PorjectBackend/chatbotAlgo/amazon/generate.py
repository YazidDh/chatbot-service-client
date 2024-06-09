import csv
import json

csv_file = 'single_qna.csv'
output_file = 'test_qna_prompt_completion.json'

prompts_and_completions = []

with open(csv_file, newline='', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for i, row in enumerate(reader):
        if i > 10000 and i <= 12500:
            prompt = f'Question: {row["Question"]}\n Answer:'
            completion = f'{row["Answer"]}'
            prompts_and_completions.append({"prompt": prompt, "completion": completion})
        if i > 12500:
            break

with open(output_file, 'w') as f:
    json.dump(prompts_and_completions, f, indent=4)