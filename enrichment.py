import argparse
from werkzeug.wrappers import Request, Response
from werkzeug.serving import run_simple
from jsonrpc import JSONRPCResponseManager, dispatcher

parser = argparse.ArgumentParser(description='Detect information groups in a microtext collection')
parser.add_argument('-p', '--port', type=str, help='the port on which the application runs')
args = parser.parse_args()

@Request.application
def application(request):
   # Dispatcher is dictionary {<method_name>: callable}
   dispatcher["classify"] = lambda tweet: 'important' if 'floodtags' in tweet else 'discard'

   response = JSONRPCResponseManager.handle(request.data, dispatcher)
   return Response(response.json, mimetype='application/json')


if __name__ == '__main__':
   run_simple('localhost', int(args.port), application)
