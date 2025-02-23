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
              bat 'docker create --name CSI403_DOCKER csi403_docker:latest'
              bat 'docker build -t csi403_dockertest .'
            }
        }
        stage('Test') {
            steps {
                print "Testing"
            }
        }
    }
}