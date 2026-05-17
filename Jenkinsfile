pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t portfolio-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker stop portfolio-container || true'
                sh 'docker rm portfolio-container || true'
                sh 'docker run -d -p 8082:80 --name portfolio-container portfolio-app'
            }
        }
    }
}
