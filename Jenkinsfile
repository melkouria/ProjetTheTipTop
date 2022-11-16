
pipeline {
    agent any
    environment {
        PROJECT_ID = 'regal-bonito-365811'
        CLUSTER_NAME = 'autopilot-cluster-3'
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
                    sh'docker build -t elkouria/backend:latestF .'
                    sh 'docker login -u elkouria -p Kouria1996'
                    
                    }
                    
                }
            }
        }
        stage("Build Frontend image") {
            steps {
                script {
                    dir('frontend'){
                    sh'docker build -t elkouria/frontend:latestF .'
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
                              
                          sh 'docker pull elkouria/backend:latestF'
                          sh 'docker push elkouria/backend:latestF'
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
                             
                          sh 'docker pull elkouria/frontend:latestF'
                          sh 'docker push elkouria/frontend:latestF'
              }
                     }
                    
                }
            }
        }          
        stage('Deploy Backend  GKE') {
            steps{
                 sh "sed -i 's/backend:latestF/backend:${env.BUILD_ID}/g' deployment.yaml"
                 step([$class: 'KubernetesEngineBuilder', projectId: env.PROJECT_ID, clusterName: env.CLUSTER_NAME, location: env.LOCATION, manifestPattern: 'deployment.yaml', credentialsId: env.CREDENTIALS_ID, verifyDeployments: true])
            }
                               
            }
         stage('Deploy  front to GKE') {
            steps{
                 sh "sed -i 's/frontend:latestF/frontend:${env.BUILD_ID}/g' deployment.yaml"
                 step([$class: 'KubernetesEngineBuilder', projectId: env.PROJECT_ID, clusterName: env.CLUSTER_NAME, location: env.LOCATION, manifestPattern: 'deployment.yaml', credentialsId: env.CREDENTIALS_ID, verifyDeployments: true])
            }
                               
            }    
        
    }    
}