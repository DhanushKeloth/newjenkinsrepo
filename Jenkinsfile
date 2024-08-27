pipeline {
    agent any  // Run the pipeline on any available agent

    environment {
        // Define the Node.js version to use
        NODE_VERSION = '20.12.2'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from the SCM
                checkout scm
            }
        }

        stage('Setup Node.js Environment') {
            steps {
                script {
                    // Use Node.js version defined in the environment
                    def nodeHome = tool name: "NodeJS ${NODE_VERSION}", type: 'NodeJSInstallation'
                    env.PATH = "${nodeHome}/bin:${env.PATH}"
                }
                // Verify Node.js and npm versions
                sh 'node --version'
                sh 'npm --version'
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
                // Build the project
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                // Example deployment step
                echo 'Deploying application...'
                // Add deployment commands here
            }
        }
    }

    post {
        always {
            // Clean up or notify regardless of the build outcome
            echo 'Cleaning up...'
            // Add cleanup steps here if needed
        }
        success {
            // Notify on successful build
            echo 'Build successful!'
        }
        failure {
            // Notify on failed build
            echo 'Build failed!'
        }
    }
}
