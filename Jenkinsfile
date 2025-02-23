pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scmGit(
                branches: [[name: 'main']],
                userRemoteConfigs: [[url: 'https://github.com/65061447/CSI402-Frontend-NextJS-.git']])
            }
        }
        stage('Build') {
            steps {
                print "Docker Build Image"
                script {
                    bat "docker build -t csi403_docker"
                    print "Docker Build Image Success"
                }
                
                print "Docker Image To Running Container"
                script {
                    bat "docker run -d --name csi403_docker-run -p 52500:3000 csi403_docker:latest"
                    print "Docker Image to Running Container Success"

                } 
            }
        }
        stage('Test') {
            steps {
                print "Testing"
            }
        }
    }
}