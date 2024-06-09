import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from generate_resp import get_completion
from test_similarity import adjust_response
model_name = "curie:ft-personal-2023-05-22-17-31-26"
#curie:ft-personal-2023-05-06-12-53-18
# Example usage:
prompt = sys.argv[1]
completion = get_completion(prompt, model_name, max_tokens=50)
response = adjust_response(prompt, completion)
print(response)
