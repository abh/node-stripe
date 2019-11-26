declare namespace Stripe {
  /**
   * The ThreeDSecure object.
   */
  export interface ThreeDSecure {
    amount?: number;

    /**
     * True if the cardholder went through the authentication flow and their bank indicated that authentication succeeded.
     */
    authenticated?: boolean;

    card?: Card;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created?: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency?: string;

    /**
     * Unique identifier for the object.
     */
    id?: string;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode?: boolean;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'three_d_secure';

    /**
     * If present, this is the URL that you should send the cardholder to for authentication. If you are going to use Stripe.js to display the authentication page in an iframe, you should use the value "_callback".
     */
    redirect_url?: string | null;

    /**
     * Possible values are `redirect_pending`, `succeeded`, or `failed`. When the cardholder can be authenticated, the object starts with status `redirect_pending`. When liability will be shifted to the cardholder's bank (either because the cardholder was successfully authenticated, or because the bank has not implemented 3D Secure, the object wlil be in status `succeeded`. `failed` indicates that authentication was attempted unsuccessfully.
     */
    status?: string;
  }

  /**
   * Initiate 3D Secure authentication.
   */
  export interface ThreeDSecureCreateParams {
    /**
     * Amount of the charge that you will create when authentication completes.
     */
    amount: number;

    /**
     * The ID of a card token, or the ID of a card belonging to the given customer.
     */
    card?: string;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;

    customer?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The URL that the cardholder's browser will be returned to when authentication completes.
     */
    return_url: string;
  }

  /**
   * Retrieves a 3D Secure object.
   */
  export interface ThreeDSecureRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  class ThreeDSecureResource {
    /**
     * Initiate 3D Secure authentication.
     */
    create(
      params: ThreeDSecureCreateParams,
      options?: HeaderOptions
    ): Promise<ThreeDSecure>;

    /**
     * Retrieves a 3D Secure object.
     */
    retrieve(
      id: string,
      params?: ThreeDSecureRetrieveParams,
      options?: HeaderOptions
    ): Promise<ThreeDSecure>;
  }
}