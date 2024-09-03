pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/YOUR_USERNAME/my-node-app.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    def nodeHome = tool name: 'NodeJS', type: 'NodeJSInstallation'
                    env.PATH = "${nodeHome}/bin:${env.PATH}"
                    sh 'npm install'
                }
            }
        }
        stage('Run Tests') {
            steps {
                // Add test commands if you have tests
            }
        }
        stage('Build') {
            steps {
                // Add build commands if necessary
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy stage (not implemented)'
            }
        }
    }
}
