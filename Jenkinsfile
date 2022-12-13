
pipeline {
    agent any
    environment {
        PROJECT_ID = 'elegant-beach-368817'
        CLUSTER_NAME = 'autopilot-cluster-1'
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
                    sh'docker build -t elkouria/frontend:latest .'
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
                          sh 'docker push elkouria/frontend:latest'
              }
                     }
                    
                }
            }
        }          
         stage('Start container') {
             steps {
              sh 'docker-compose up -d'
              sh 'docker-compose ps'
              }
          }
    }

       
}
