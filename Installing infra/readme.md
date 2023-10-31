    brew tap weaveworks/tap

    brew tap weaveworks/tap
    brew install weaveworks/tap/eksctl
    install aws cli https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
    create github_deployer user with some permissions
    aws configure
    Create a repo dynamic-forms-rep over https://us-east-2.console.aws.amazon.com/ecr/repositories?region=us-east-2
    eksctl create cluster --name dynamic-forms-eks1 --region us-east-2 --nodegroup-name linux-nodes --node-type t2.micro --nodes 2
    eksctl delete cluster --region=us-east-2 --name=dynamic-forms-eks
    Install kubectl and execute kubectl get services

    kubectl logs dynamic-forms-7db8b74d88-s2mns --logs
    kubectl exec -it dynamic-forms-7db8b74d88-s2mns -- /bin/sh  --consola dinamica


    Esto crea un conjunto de sercretos:

      - name: Create ConfigMap from Secrets
        run: |
          kubectl delete configmap app-forms-dynamic-configs
          kubectl create configmap app-forms-dynamic-configs \
            --from-literal=GOOGLE_CLIENT_ID="${{ secrets.AWS_ACCESS_KEY_ID }}" \
            --from-literal=OTHER_KEY="${{ secrets.AWS_ACCESS_KEY_ID }}" 


# Para configurar el cloud front

Configurar el cloud front con Origin access control settings (recommended)
Bucket can restrict access to only CloudFront.

y actualizar la bucket policy

```json
    {
    "Version": "2008-10-17",
    "Id": "PolicyForCloudFrontPrivateContent",
    "Statement": [
    {
    "Sid": "AllowCloudFrontServicePrincipal",
    "Effect": "Allow",
    "Principal": {
    "Service": "cloudfront.amazonaws.com"
    },
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::dynamic-forms-s3/*",
    "Condition": {
    "StringEquals": {
    "AWS:SourceArn": "arn:aws:cloudfront::624534814971:distribution/E3NEU6VKVZ5FHT"
    }
    }
    }
    ]
    }
```
