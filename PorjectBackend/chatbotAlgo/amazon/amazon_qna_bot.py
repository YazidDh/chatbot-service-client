

import sys
import os
import re
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
model_name = "curie:ft-personal-2023-05-25-23-39-41"
from generate_resp import get_completion
from test_similarity import adjust_response
# Example usage:
prompt = sys.argv[1]
completion = get_completion(prompt, model_name, 100, 0.2)
completion = re.sub(r'\bAnswer \b', '', completion)
response = adjust_response(prompt, completion)
print(response)
