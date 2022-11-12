
pipeline {
    agent any
    environment {
        PROJECT_ID = 'regal-bonito-365811'
        CLUSTER_NAME = 'autopilot-cluster-1	'
        LOCATION = 'us-central1'
        CREDENTIALS_ID = 'multi-k8s'
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
                    myapp = docker.build('elkouria/backend:latest')
                    }
                    
                }
            }
        }

        stage("Push image") {
            steps {
                script {
                    sh 'pwd'

                    docker.withRegistry('https://registry.hub.docker.com', 'dockerID') {     
                        checkout scm       
                                   
                        app.push("latest")        
              }
                }
            }
        }        
        stage('Deploy to GKE') {
            steps{
                sh "sed -i 's/backend:latest/backend:${env.BUILD_ID}/g' deployment.yaml"
                step([$class: 'KubernetesEngineBuilder', projectId: env.PROJECT_ID, clusterName: env.CLUSTER_NAME, location: env.LOCATION, manifestPattern: 'deployment.yaml', credentialsId: env.CREDENTIALS_ID, verifyDeployments: true])
            }
        }
    }    
}