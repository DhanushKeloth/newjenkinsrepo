pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the repository
                git url:'https://github.com/DhanushKeloth/newjenkinsrepo.git',branch:'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install dependencies
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Run tests
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                // Optional: Build step if needed (e.g., for transpiling)
                echo 'Building the project...'
            }
        }

        stage('Deploy') {
            steps {
                // Deploy the application (could be to a server, Heroku, etc.)
                echo 'Deploying the application...'
                // Example command: sh 'npm run deploy' (if you have a deploy script)
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
