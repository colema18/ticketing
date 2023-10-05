Need the following installed:
- Docker with Kubernetes enabled
- Skaffold
- Kubernetes Ingress Nginx https://kubernetes.github.io/ingress-nginx/deploy/#quick-start

JWT Secret Key creation: for dev/example purposes only, this key should not be in source
k create secret generic jwt-secret --from-literal=JWT_KEY=asdf