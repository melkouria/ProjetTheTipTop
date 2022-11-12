
pipeline {
    agent any
    environment {
        PROJECT_ID = 'regal-bonito-365811'
        CLUSTER_NAME = 'autopilot-cluster-1	'
        LOCATION = 'us-central1'
        CREDENTIALS_ID = 'kubernetes'
        
    }
    stages {
        stage("Checkout code") {
            steps {
                checkout scm
                sh 'echo "list workspace"'
                sh 'ls -lah'
            }
        }
        stage("Build front  image") {
            steps {
                script {
                    dir('Backend'){
                    sh'docker build -t elkouria/backend:latest .'
                    
                    }
                    
                }
            }
        }

        stage("Push image") {
            steps {
                script {
                     dir('Backend'){
                        docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
                           sh 'docker images'
                           sh 'docker login -u elkouria -p Kouria1996'    
                          sh 'docker pull elkouria/backend:latest'
                          sh 'docker push elkouria/backend:latest'
              }
                     }
                    
                }
            }
        }        
        stage('Deploy to GKE') {
            steps{
                 dir('Backend'){
                    sh "sed -i 's/backend:latest/backend:${env.BUILD_ID}/g' deployment.yaml"
                    
                step([$class: 'KubernetesEngineBuilder', projectId: env.PROJECT_ID, clusterName: env.CLUSTER_NAME, location: env.LOCATION, manifestPattern: 'deployment.yaml', credentialsId: env.CREDENTIALS_ID, verifyDeployments: true])
                 }
                
            }
        }
    }    
}