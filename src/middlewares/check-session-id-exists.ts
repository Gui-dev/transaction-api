import { FastifyReply, FastifyRequest } from 'fastify'

export const checkSessionIdExists = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  const session_id = request.cookies.session_id

  if (!session_id) {
    return reply.status(401).send({
      error: 'Unauthorized',
    })
  }
}
