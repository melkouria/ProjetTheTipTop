
pipeline {
    agent any
    environment {
        PROJECT_ID = 'regal-bonito-365811'
        CLUSTER_NAME = 'autopilot-cluster-1'
        LOCATION = 'us-central1'
        CREDENTIALS_ID = 'kubernetes'
        
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
                    
                    }
                    
                }
            }
        }
        stage("Build front image") {
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
                          sh 'docker pull elkouria/backend:latest'
                          sh 'docker push elkouria/backend:latest'
              }
                     }
                    
                }
            }
        }
        stage("Push front image") {
            steps {
                script {
                     dir('frontend'){
                        docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
                           sh 'docker images'
                           sh 'docker login -u elkouria -p Kouria1996'    
                          sh 'docker pull elkouria/front:latest'
                          sh 'docker push elkouria/front:latest'
              }
                     }
                    
                }
            }
        }          
        stage('Deploy to GKE') {
            steps{
                 dir('Backend'){
                 sh "sed -i 's/backend:latest/backend:${env.BUILD_ID}/g' deployment.yaml"
                step([$class: 'KubernetesEngineBuilder', projectId: 'regal-bonito-365811' , clusterName:'autopilot-cluster-1', location: 'us-central1', manifestPattern: 'deployment.yaml', credentialsId: 'kubernetes', verifyDeployments: true])
                 }
                
            }
            steps{
                 dir('frontend'){
                 sh "sed -i 's/backend:latest/front:${env.BUILD_ID}/g' deployment.yaml"
                step([$class: 'KubernetesEngineBuilder', projectId: 'regal-bonito-365811' , clusterName:'autopilot-cluster-1', location: 'us-central1', manifestPattern: 'deployment.yaml', credentialsId: 'kubernetes', verifyDeployments: true])
                 }
                
            }
        }
    }    
}