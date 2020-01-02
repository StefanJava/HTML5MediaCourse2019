import Context from "../Context";

/**
 *
 * @param e
 * @param context {Context}
 * @param data
 * @returns {Promise<void>}
 * @constructor
 */
async function HandlerReceivedAnswerIce(e, context, data) {
    console.log(data);
    let offerPC = context.getData(Context.KEY_OFFER_PEER_CONNECTION);
    await offerPC.addIceCandidate(new RTCIceCandidate(data.ice));
}

export default HandlerReceivedAnswerIce;