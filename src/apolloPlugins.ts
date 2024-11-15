import { ApolloServerPlugin } from '@apollo/server'

export const SendTokenOverHeaders = (): ApolloServerPlugin<{ token?: string }> => ({
  async requestDidStart() {
    return {
      async willSendResponse(requestContext) {
        const { token } = requestContext.contextValue
        if (token) {
          requestContext.response.http!.headers.set('Authorization', `Bearer ${token}`)
        }
      }
    }
  }
})
