import openai

def get_completion(prompt, model_name, max_tokens=50, temperature=0.6):
    # Make the completion request
    completion = openai.Completion.create(model=model_name, prompt=prompt, max_tokens=max_tokens, temperature=temperature)

    # Get the completion text from the first choice in the choices list
    text = completion['choices'][0]["text"]
    #completion['choices'][0]["text"]
    # Return the completion as a string
    return text

