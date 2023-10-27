Need the following installed:
- Docker with Kubernetes enabled
- Skaffold
- Kubernetes Ingress Nginx https://kubernetes.github.io/ingress-nginx/deploy/#quick-start
- - kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/cloud/deploy.yaml

JWT Secret Key creation: for dev/example purposes only, this key should not be in source
k create secret generic jwt-secret --from-literal=JWT_KEY=asdf
or if running outside of docker/k8s
export JWT_KEY=asdf