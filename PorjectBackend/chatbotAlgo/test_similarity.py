import spacy


def remove_repeated_part(paragraph):
    sentences = paragraph.split('.')

    if len(sentences) == 1:
        return paragraph

    if not paragraph.endswith("."):
        sentences = sentences[:len(sentences) - 1]
    for i in range(len(sentences) - 1):
        if (sentences[i].strip() == sentences[i+1].strip()):
            return ". ".join(sentences[:i+1])+"."
    if sentences[len(sentences) - 1].strip() in sentences[0].strip():
        return ". ".join(sentences[:len(sentences) - 1])+"."

    return ". ".join(sentences)+"."



paragraph = "Yes but only if you get a long extension. I had to buy a long extension. " \
           "You first have to sand down the sharp edges where the heating elements are. " \
           "Scrape off any glue that might be sticking to it"
#result = remove_repeated_part(paragraph)
#print(result)






#print(replace_pronouns(": I bought a guitar from them and had problems with the pickups. I sent it back to them and they gave me a refund. " \
#         "I then bought it from another seller.I'm not sure if you can get a refund from them, but I suggest you contact them first. " \
#         "They have good customer service.I bought a guitar from them and had problems with the pickups. " \
#         "I sent it back to them and they gave me a refund. I then bought it from another"))

def adjust_response(question, answer):
    nlp = spacy.load("en_core_web_lg")
    answer = remove_repeated_part(answer)
    question = nlp(question)
    answer = nlp(answer)

    similarity_score = question.similarity(answer)
    if similarity_score >= 0.6:
        return answer
    elif similarity_score >= 0.3 and similarity_score <0.6:
        return "Sorry. Can you reformulate or simplify your question ?"
    return "Sorry, I cannot answer your question."





question = " i meant what is the procedure to buy products like laptop from amazon website ?"
answer = " Someone mean how do he pay? How do he get the product shipped? Will there be any import taxes? Any other procedures? " \
         "Answer: 1. Go to Amazon.com 2. Type in the product you want to buy 3. Click on the blue button that says 'Buy it Now' 4. " \
         "Pay for the product 5. Wait for it to be delivered 6. Enjoy Answer: Hello, This is a different website than amazon.com. " \
         "Go to www.abt."

#print(adjust_response(question, answer))