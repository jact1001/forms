    brew tap weaveworks/tap

    brew tap weaveworks/tap
    brew install weaveworks/tap/eksctl
    install aws cli https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
    create github_deployer user with some permissions
    aws configure

    Subir un cluster: (esperar 14 minutos)
    Create a repo dynamic-forms-rep over https://us-east-2.console.aws.amazon.com/ecr/repositories?region=us-east-2
    # Crear un cluster
    eksctl create cluster --name dynamic-forms-eks1 --region us-east-2 --nodegroup-name linux-nodes --node-type t2.micro --nodes 2
    # Borrar el cluster
    eksctl delete cluster --region=us-east-2 --name=dynamic-forms-eks1
    Install kubectl and execute kubectl get services

    Ver los services del cluster
    kubectl logs dynamic-forms-7db8b74d88-s2mns --logs
    kubectl exec -it dynamic-forms-7db8b74d88-s2mns -- /bin/sh  --consola dinamica
