
pipeline {
    agent any
    environment {
        PROJECT_ID = 'regal-bonito-365811'
        CLUSTER_NAME = 'autopilot-cluster-2'
        LOCATION = 'us-central1'
        CREDENTIALS_ID = 'gcpkey'
        
    }
    stages {
        stage("Checkout code") {
            steps {
                checkout scm
            }
        }
        stage("Build backend image") {
            steps {
                script {
                    dir('Backend'){
                    sh'docker build -t elkouria/backend:latest .'
                    sh 'docker login -u elkouria -p Kouria1996'
                    
                    }
                    
                }
            }
        }
        stage("Build Frontend image") {
            steps {
                script {
                    dir('frontend'){
                    sh'docker build -t elkouria/front:latest .'
                    }
                    
                }
            }
        }

        stage("Push Backend image") {
            steps {
                script {
                     dir('Backend'){
                        docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
                           sh 'docker images'
                           sh 'docker login -u elkouria -p Kouria1996' 
                            
                         
                          sh 'docker push elkouria/backend:latest'
              }
                     }
                    
                }
            }
        }
        stage("Push Frontend image") {
            steps {
                script {
                     dir('frontend'){
                        docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
                           sh 'docker images'
                           sh 'docker login -u elkouria -p Kouria1996' 
                             
                         
                          sh 'docker push elkouria/front:latest'
              }
                     }
                    
                }
            }
        }          
        stage('Deploy Backend  GKE') {
            steps{
                 sh "sed -i 's/backend:latest/backend:${env.BUILD_ID}/g' deployment.yaml"
                 step([$class: 'KubernetesEngineBuilder', projectId: env.PROJECT_ID, clusterName: env.CLUSTER_NAME, location: env.LOCATION, manifestPattern: 'deployment.yaml', credentialsId: env.CREDENTIALS_ID, verifyDeployments: true])
            }
                               
            }
         stage('Deploy  front to GKE') {
            steps{
                 sh "sed -i 's/front:latest/front:${env.BUILD_ID}/g' deployment.yaml"
                 step([$class: 'KubernetesEngineBuilder', projectId: env.PROJECT_ID, clusterName: env.CLUSTER_NAME, location: env.LOCATION, manifestPattern: 'deployment.yaml', credentialsId: env.CREDENTIALS_ID, verifyDeployments: true])
            }
                               
            }    
        
    }    
}