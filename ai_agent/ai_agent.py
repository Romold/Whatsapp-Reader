# #OPEN AI doesn't allow free access building this from Scratch

# from flask import Flask, request, jsonify
# import openai
# from openai import OpenAI
# import os
# from dotenv import load_dotenv

# load_dotenv()

# app = Flask(__name__)

# client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))

# @app.route('/reply', methods=['POST'])
# def reply():
#     user_message = request.json.get('message')
#     response = client.chat.completions.create(
#         model="gpt-3.5-turbo",
#         messages=[
#             {"role": "system", "content": "You are a helpful assistant replying on WhatsApp."},
#             {"role": "user", "content": user_message}
#         ]
#     )
#     ai_reply = response.choices[0].message.content.strip()
#     return jsonify({'reply': ai_reply})

# if __name__ == '__main__':
#     app.run(debug=True)

