pipeline {
    agent any  // Run the pipeline on any available agent



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
                   echo "building app"
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "install dep"
            }
        }

        stage('Run Tests') {
            steps {
                // Run tests
                echo "run tests"
            }
        }

        stage('Build') {
            steps {
                // Build the project
              echo "building"
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
