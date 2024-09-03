pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/DhanushKeloth/newjenkinsrepo.git'
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
                echo "test"
            }
        }
        stage('Build') {
            steps {
                // Add build commands if necessary
                echo "test"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy stage (not implemented)'
                
            }
        }
    }
}
