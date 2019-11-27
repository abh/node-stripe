declare namespace Stripe {
  namespace Issuing {
    /**
     * The Card object.
     */
    interface Card {
      authorization_controls?: AuthorizationControls;

      /**
       * The brand of the card.
       */
      brand?: string;

      /**
       * The [Cardholder](https://stripe.com/docs/api#issuing_cardholder_object) object to which the card belongs.
       */
      cardholder?: Issuing.Cardholder | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created?: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency?: string;

      /**
       * The expiration month of the card.
       */
      exp_month?: number;

      /**
       * The expiration year of the card.
       */
      exp_year?: number;

      /**
       * Unique identifier for the object.
       */
      id?: string;

      /**
       * The last 4 digits of the card number.
       */
      last4?: string;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode?: boolean;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: {
        [key: string]: string;
      };

      /**
       * The name of the cardholder, printed on the card.
       */
      name?: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object?: 'issuing.card';

      /**
       * Metadata about the PIN on the card.
       */
      pin?: Pin | null;

      /**
       * The card this card replaces, if any.
       */
      replacement_for?: string | Issuing.Card | null;

      /**
       * Why the card that this card replaces (if any) needed to be replaced. One of `damage`, `expiration`, `loss`, or `theft`.
       */
      replacement_reason?: Card.ReplacementReason | null;

      /**
       * Where and how the card will be shipped.
       */
      shipping?: Shipping | null;

      /**
       * One of `active`, `inactive`, `canceled`, `lost`, or `stolen`.
       */
      status?: Card.Status;

      /**
       * One of `virtual` or `physical`.
       */
      type?: string;
    }

    namespace Card {
      type ReplacementReason = 'damage' | 'expiration' | 'loss' | 'theft'

      type Status =
        | 'active'
        | 'canceled'
        | 'inactive'
        | 'lost'
        | 'pending'
        | 'stolen'
    }

    /**
     * Creates an Issuing Card object.
     */
    interface CardCreateParams {
      /**
       * Spending rules that give you some control over how your cards can be used. Refer to our [authorizations](https://stripe.com/docs/issuing/authorizations) documentation for more details.
       */
      authorization_controls?: CardCreateParams.AuthorizationControls;

      /**
       * The [Cardholder](https://stripe.com/docs/api#issuing_cardholder_object) object with which the card will be associated.
       */
      cardholder?: string;

      /**
       * The currency for the card. This currently must be `usd`.
       */
      currency: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      metadata?: {
        [key: string]: string;
      };

      /**
       * The card this is meant to be a replacement for (if any).
       */
      replacement_for?: string;

      /**
       * If `replacement_for` is specified, this should indicate why that card is being replaced. One of `damage`, `expiration`, `loss`, or `theft`.
       */
      replacement_reason?: CardCreateParams.ReplacementReason;

      /**
       * The address where the card will be shipped.
       */
      shipping?: CardCreateParams.Shipping;

      /**
       * Specifies whether to permit authorizations on this card. Possible values are `active` or `inactive`.
       */
      status?: CardCreateParams.Status;

      /**
       * The type of card to issue. Possible values are `physical` or `virtual`.
       */
      type: CardCreateParams.Type;
    }

    namespace CardCreateParams {
      interface AuthorizationControls {
        /**
         * Array of strings containing [categories](https://stripe.com/docs/api#issuing_authorization_object-merchant_data-category) of authorizations permitted on this card.
         */
        allowed_categories?: Array<AuthorizationControls.AllowedCategory>;

        /**
         * Array of strings containing [categories](https://stripe.com/docs/api#issuing_authorization_object-merchant_data-category) of authorizations to always decline on this card.
         */
        blocked_categories?: Array<AuthorizationControls.BlockedCategory>;

        /**
         * Maximum count of approved authorizations on this card. Counts all authorizations retroactively.
         */
        max_approvals?: number;

        /**
         * Limit the spending with rules based on time intervals and categories.
         */
        spending_limits?: Array<AuthorizationControls.SpendingLimit>;
      }

      namespace AuthorizationControls {
        type AllowedCategory =
          | 'ac_refrigeration_repair'
          | 'accounting_bookkeeping_services'
          | 'advertising_services'
          | 'agricultural_cooperative'
          | 'airlines_air_carriers'
          | 'airports_flying_fields'
          | 'ambulance_services'
          | 'amusement_parks_carnivals'
          | 'antique_reproductions'
          | 'antique_shops'
          | 'aquariums'
          | 'architectural_surveying_services'
          | 'art_dealers_and_galleries'
          | 'artists_supply_and_craft_shops'
          | 'auto_and_home_supply_stores'
          | 'auto_body_repair_shops'
          | 'auto_paint_shops'
          | 'auto_service_shops'
          | 'automated_cash_disburse'
          | 'automated_fuel_dispensers'
          | 'automobile_associations'
          | 'automotive_parts_and_accessories_stores'
          | 'automotive_tire_stores'
          | 'bail_and_bond_payments'
          | 'bakeries'
          | 'bands_orchestras'
          | 'barber_and_beauty_shops'
          | 'betting_casino_gambling'
          | 'bicycle_shops'
          | 'billiard_pool_establishments'
          | 'boat_dealers'
          | 'boat_rentals_and_leases'
          | 'book_stores'
          | 'books_periodicals_and_newspapers'
          | 'bowling_alleys'
          | 'bus_lines'
          | 'business_secretarial_schools'
          | 'buying_shopping_services'
          | 'cable_satellite_and_other_pay_television_and_radio'
          | 'camera_and_photographic_supply_stores'
          | 'candy_nut_and_confectionery_stores'
          | 'car_and_truck_dealers_new_used'
          | 'car_and_truck_dealers_used_only'
          | 'car_rental_agencies'
          | 'car_washes'
          | 'carpentry_services'
          | 'carpet_upholstery_cleaning'
          | 'caterers'
          | 'charitable_and_social_service_organizations_fundraising'
          | 'chemicals_and_allied_products'
          | 'child_care_services'
          | 'childrens_and_infants_wear_stores'
          | 'chiropodists_podiatrists'
          | 'chiropractors'
          | 'cigar_stores_and_stands'
          | 'civic_social_fraternal_associations'
          | 'cleaning_and_maintenance'
          | 'clothing_rental'
          | 'colleges_universities'
          | 'commercial_equipment'
          | 'commercial_footwear'
          | 'commercial_photography_art_and_graphics'
          | 'commuter_transport_and_ferries'
          | 'computer_network_services'
          | 'computer_programming'
          | 'computer_repair'
          | 'computer_software_stores'
          | 'computers_peripherals_and_software'
          | 'concrete_work_services'
          | 'construction_materials'
          | 'consulting_public_relations'
          | 'correspondence_schools'
          | 'cosmetic_stores'
          | 'counseling_services'
          | 'country_clubs'
          | 'courier_services'
          | 'court_costs'
          | 'credit_reporting_agencies'
          | 'cruise_lines'
          | 'dairy_products_stores'
          | 'dance_hall_studios_schools'
          | 'dating_escort_services'
          | 'dentists_orthodontists'
          | 'department_stores'
          | 'detective_agencies'
          | 'digital_goods_applications'
          | 'digital_goods_games'
          | 'digital_goods_large_volume'
          | 'digital_goods_media'
          | 'direct_marketing_catalog_merchant'
          | 'direct_marketing_combination_catalog_and_retail_merchant'
          | 'direct_marketing_inbound_telemarketing'
          | 'direct_marketing_insurance_services'
          | 'direct_marketing_other'
          | 'direct_marketing_outbound_telemarketing'
          | 'direct_marketing_subscription'
          | 'direct_marketing_travel'
          | 'discount_stores'
          | 'doctors'
          | 'door_to_door_sales'
          | 'drapery_window_covering_and_upholstery_stores'
          | 'drinking_places'
          | 'drug_stores_and_pharmacies'
          | 'drugs_drug_proprietaries_and_druggist_sundries'
          | 'dry_cleaners'
          | 'durable_goods'
          | 'duty_free_stores'
          | 'eating_places_restaurants'
          | 'educational_services'
          | 'electric_razor_stores'
          | 'electrical_parts_and_equipment'
          | 'electrical_services'
          | 'electronics_repair_shops'
          | 'electronics_stores'
          | 'elementary_secondary_schools'
          | 'employment_temp_agencies'
          | 'equipment_rental'
          | 'exterminating_services'
          | 'family_clothing_stores'
          | 'fast_food_restaurants'
          | 'financial_institutions'
          | 'fines_government_administrative_entities'
          | 'fireplace_fireplace_screens_and_accessories_stores'
          | 'floor_covering_stores'
          | 'florists'
          | 'florists_supplies_nursery_stock_and_flowers'
          | 'freezer_and_locker_meat_provisioners'
          | 'fuel_dealers_non_automotive'
          | 'funeral_services_crematories'
          | 'furniture_home_furnishings_and_equipment_stores_except_appliances'
          | 'furniture_repair_refinishing'
          | 'furriers_and_fur_shops'
          | 'general_services'
          | 'gift_card_novelty_and_souvenir_shops'
          | 'glass_paint_and_wallpaper_stores'
          | 'glassware_crystal_stores'
          | 'golf_courses_public'
          | 'government_services'
          | 'grocery_stores_supermarkets'
          | 'hardware_equipment_and_supplies'
          | 'hardware_stores'
          | 'health_and_beauty_spas'
          | 'hearing_aids_sales_and_supplies'
          | 'heating_plumbing_a_c'
          | 'hobby_toy_and_game_shops'
          | 'home_supply_warehouse_stores'
          | 'hospitals'
          | 'hotels_motels_and_resorts'
          | 'household_appliance_stores'
          | 'industrial_supplies'
          | 'information_retrieval_services'
          | 'insurance_default'
          | 'insurance_underwriting_premiums'
          | 'intra_company_purchases'
          | 'jewelry_stores_watches_clocks_and_silverware_stores'
          | 'landscaping_services'
          | 'laundries'
          | 'laundry_cleaning_services'
          | 'legal_services_attorneys'
          | 'luggage_and_leather_goods_stores'
          | 'lumber_building_materials_stores'
          | 'manual_cash_disburse'
          | 'marinas_service_and_supplies'
          | 'masonry_stonework_and_plaster'
          | 'massage_parlors'
          | 'medical_and_dental_labs'
          | 'medical_dental_ophthalmic_and_hospital_equipment_and_supplies'
          | 'medical_services'
          | 'membership_organizations'
          | 'mens_and_boys_clothing_and_accessories_stores'
          | 'mens_womens_clothing_stores'
          | 'metal_service_centers'
          | 'miscellaneous'
          | 'miscellaneous_apparel_and_accessory_shops'
          | 'miscellaneous_auto_dealers'
          | 'miscellaneous_business_services'
          | 'miscellaneous_food_stores'
          | 'miscellaneous_general_merchandise'
          | 'miscellaneous_general_services'
          | 'miscellaneous_home_furnishing_specialty_stores'
          | 'miscellaneous_publishing_and_printing'
          | 'miscellaneous_recreation_services'
          | 'miscellaneous_repair_shops'
          | 'miscellaneous_specialty_retail'
          | 'mobile_home_dealers'
          | 'motion_picture_theaters'
          | 'motor_freight_carriers_and_trucking'
          | 'motor_homes_dealers'
          | 'motor_vehicle_supplies_and_new_parts'
          | 'motorcycle_shops_and_dealers'
          | 'motorcycle_shops_dealers'
          | 'music_stores_musical_instruments_pianos_and_sheet_music'
          | 'news_dealers_and_newsstands'
          | 'non_fi_money_orders'
          | 'non_fi_stored_value_card_purchase_load'
          | 'nondurable_goods'
          | 'nurseries_lawn_and_garden_supply_stores'
          | 'nursing_personal_care'
          | 'office_and_commercial_furniture'
          | 'opticians_eyeglasses'
          | 'optometrists_ophthalmologist'
          | 'orthopedic_goods_prosthetic_devices'
          | 'osteopaths'
          | 'package_stores_beer_wine_and_liquor'
          | 'paints_varnishes_and_supplies'
          | 'parking_lots_garages'
          | 'passenger_railways'
          | 'pawn_shops'
          | 'pet_shops_pet_food_and_supplies'
          | 'petroleum_and_petroleum_products'
          | 'photo_developing'
          | 'photographic_photocopy_microfilm_equipment_and_supplies'
          | 'photographic_studios'
          | 'picture_video_production'
          | 'piece_goods_notions_and_other_dry_goods'
          | 'plumbing_heating_equipment_and_supplies'
          | 'political_organizations'
          | 'postal_services_government_only'
          | 'precious_stones_and_metals_watches_and_jewelry'
          | 'professional_services'
          | 'public_warehousing_and_storage'
          | 'quick_copy_repro_and_blueprint'
          | 'railroads'
          | 'real_estate_agents_and_managers_rentals'
          | 'record_stores'
          | 'recreational_vehicle_rentals'
          | 'religious_goods_stores'
          | 'religious_organizations'
          | 'roofing_siding_sheet_metal'
          | 'secretarial_support_services'
          | 'security_brokers_dealers'
          | 'service_stations'
          | 'sewing_needlework_fabric_and_piece_goods_stores'
          | 'shoe_repair_hat_cleaning'
          | 'shoe_stores'
          | 'small_appliance_repair'
          | 'snowmobile_dealers'
          | 'special_trade_services'
          | 'specialty_cleaning'
          | 'sporting_goods_stores'
          | 'sporting_recreation_camps'
          | 'sports_and_riding_apparel_stores'
          | 'sports_clubs_fields'
          | 'stamp_and_coin_stores'
          | 'stationary_office_supplies_printing_and_writing_paper'
          | 'stationery_stores_office_and_school_supply_stores'
          | 'swimming_pools_sales'
          | 't_ui_travel_germany'
          | 'tailors_alterations'
          | 'tax_payments_government_agencies'
          | 'tax_preparation_services'
          | 'taxicabs_limousines'
          | 'telecommunication_equipment_and_telephone_sales'
          | 'telecommunication_services'
          | 'telegraph_services'
          | 'tent_and_awning_shops'
          | 'testing_laboratories'
          | 'theatrical_ticket_agencies'
          | 'timeshares'
          | 'tire_retreading_and_repair'
          | 'tolls_bridge_fees'
          | 'tourist_attractions_and_exhibits'
          | 'towing_services'
          | 'trailer_parks_campgrounds'
          | 'transportation_services'
          | 'travel_agencies_tour_operators'
          | 'truck_stop_iteration'
          | 'truck_utility_trailer_rentals'
          | 'typesetting_plate_making_and_related_services'
          | 'typewriter_stores'
          | 'u_s_federal_government_agencies_or_departments'
          | 'uniforms_commercial_clothing'
          | 'used_merchandise_and_secondhand_stores'
          | 'utilities'
          | 'variety_stores'
          | 'veterinary_services'
          | 'video_amusement_game_supplies'
          | 'video_game_arcades'
          | 'video_tape_rental_stores'
          | 'vocational_trade_schools'
          | 'watch_jewelry_repair'
          | 'welding_repair'
          | 'wholesale_clubs'
          | 'wig_and_toupee_stores'
          | 'wires_money_orders'
          | 'womens_accessory_and_specialty_shops'
          | 'womens_ready_to_wear_stores'
          | 'wrecking_and_salvage_yards'

        type BlockedCategory =
          | 'ac_refrigeration_repair'
          | 'accounting_bookkeeping_services'
          | 'advertising_services'
          | 'agricultural_cooperative'
          | 'airlines_air_carriers'
          | 'airports_flying_fields'
          | 'ambulance_services'
          | 'amusement_parks_carnivals'
          | 'antique_reproductions'
          | 'antique_shops'
          | 'aquariums'
          | 'architectural_surveying_services'
          | 'art_dealers_and_galleries'
          | 'artists_supply_and_craft_shops'
          | 'auto_and_home_supply_stores'
          | 'auto_body_repair_shops'
          | 'auto_paint_shops'
          | 'auto_service_shops'
          | 'automated_cash_disburse'
          | 'automated_fuel_dispensers'
          | 'automobile_associations'
          | 'automotive_parts_and_accessories_stores'
          | 'automotive_tire_stores'
          | 'bail_and_bond_payments'
          | 'bakeries'
          | 'bands_orchestras'
          | 'barber_and_beauty_shops'
          | 'betting_casino_gambling'
          | 'bicycle_shops'
          | 'billiard_pool_establishments'
          | 'boat_dealers'
          | 'boat_rentals_and_leases'
          | 'book_stores'
          | 'books_periodicals_and_newspapers'
          | 'bowling_alleys'
          | 'bus_lines'
          | 'business_secretarial_schools'
          | 'buying_shopping_services'
          | 'cable_satellite_and_other_pay_television_and_radio'
          | 'camera_and_photographic_supply_stores'
          | 'candy_nut_and_confectionery_stores'
          | 'car_and_truck_dealers_new_used'
          | 'car_and_truck_dealers_used_only'
          | 'car_rental_agencies'
          | 'car_washes'
          | 'carpentry_services'
          | 'carpet_upholstery_cleaning'
          | 'caterers'
          | 'charitable_and_social_service_organizations_fundraising'
          | 'chemicals_and_allied_products'
          | 'child_care_services'
          | 'childrens_and_infants_wear_stores'
          | 'chiropodists_podiatrists'
          | 'chiropractors'
          | 'cigar_stores_and_stands'
          | 'civic_social_fraternal_associations'
          | 'cleaning_and_maintenance'
          | 'clothing_rental'
          | 'colleges_universities'
          | 'commercial_equipment'
          | 'commercial_footwear'
          | 'commercial_photography_art_and_graphics'
          | 'commuter_transport_and_ferries'
          | 'computer_network_services'
          | 'computer_programming'
          | 'computer_repair'
          | 'computer_software_stores'
          | 'computers_peripherals_and_software'
          | 'concrete_work_services'
          | 'construction_materials'
          | 'consulting_public_relations'
          | 'correspondence_schools'
          | 'cosmetic_stores'
          | 'counseling_services'
          | 'country_clubs'
          | 'courier_services'
          | 'court_costs'
          | 'credit_reporting_agencies'
          | 'cruise_lines'
          | 'dairy_products_stores'
          | 'dance_hall_studios_schools'
          | 'dating_escort_services'
          | 'dentists_orthodontists'
          | 'department_stores'
          | 'detective_agencies'
          | 'digital_goods_applications'
          | 'digital_goods_games'
          | 'digital_goods_large_volume'
          | 'digital_goods_media'
          | 'direct_marketing_catalog_merchant'
          | 'direct_marketing_combination_catalog_and_retail_merchant'
          | 'direct_marketing_inbound_telemarketing'
          | 'direct_marketing_insurance_services'
          | 'direct_marketing_other'
          | 'direct_marketing_outbound_telemarketing'
          | 'direct_marketing_subscription'
          | 'direct_marketing_travel'
          | 'discount_stores'
          | 'doctors'
          | 'door_to_door_sales'
          | 'drapery_window_covering_and_upholstery_stores'
          | 'drinking_places'
          | 'drug_stores_and_pharmacies'
          | 'drugs_drug_proprietaries_and_druggist_sundries'
          | 'dry_cleaners'
          | 'durable_goods'
          | 'duty_free_stores'
          | 'eating_places_restaurants'
          | 'educational_services'
          | 'electric_razor_stores'
          | 'electrical_parts_and_equipment'
          | 'electrical_services'
          | 'electronics_repair_shops'
          | 'electronics_stores'
          | 'elementary_secondary_schools'
          | 'employment_temp_agencies'
          | 'equipment_rental'
          | 'exterminating_services'
          | 'family_clothing_stores'
          | 'fast_food_restaurants'
          | 'financial_institutions'
          | 'fines_government_administrative_entities'
          | 'fireplace_fireplace_screens_and_accessories_stores'
          | 'floor_covering_stores'
          | 'florists'
          | 'florists_supplies_nursery_stock_and_flowers'
          | 'freezer_and_locker_meat_provisioners'
          | 'fuel_dealers_non_automotive'
          | 'funeral_services_crematories'
          | 'furniture_home_furnishings_and_equipment_stores_except_appliances'
          | 'furniture_repair_refinishing'
          | 'furriers_and_fur_shops'
          | 'general_services'
          | 'gift_card_novelty_and_souvenir_shops'
          | 'glass_paint_and_wallpaper_stores'
          | 'glassware_crystal_stores'
          | 'golf_courses_public'
          | 'government_services'
          | 'grocery_stores_supermarkets'
          | 'hardware_equipment_and_supplies'
          | 'hardware_stores'
          | 'health_and_beauty_spas'
          | 'hearing_aids_sales_and_supplies'
          | 'heating_plumbing_a_c'
          | 'hobby_toy_and_game_shops'
          | 'home_supply_warehouse_stores'
          | 'hospitals'
          | 'hotels_motels_and_resorts'
          | 'household_appliance_stores'
          | 'industrial_supplies'
          | 'information_retrieval_services'
          | 'insurance_default'
          | 'insurance_underwriting_premiums'
          | 'intra_company_purchases'
          | 'jewelry_stores_watches_clocks_and_silverware_stores'
          | 'landscaping_services'
          | 'laundries'
          | 'laundry_cleaning_services'
          | 'legal_services_attorneys'
          | 'luggage_and_leather_goods_stores'
          | 'lumber_building_materials_stores'
          | 'manual_cash_disburse'
          | 'marinas_service_and_supplies'
          | 'masonry_stonework_and_plaster'
          | 'massage_parlors'
          | 'medical_and_dental_labs'
          | 'medical_dental_ophthalmic_and_hospital_equipment_and_supplies'
          | 'medical_services'
          | 'membership_organizations'
          | 'mens_and_boys_clothing_and_accessories_stores'
          | 'mens_womens_clothing_stores'
          | 'metal_service_centers'
          | 'miscellaneous'
          | 'miscellaneous_apparel_and_accessory_shops'
          | 'miscellaneous_auto_dealers'
          | 'miscellaneous_business_services'
          | 'miscellaneous_food_stores'
          | 'miscellaneous_general_merchandise'
          | 'miscellaneous_general_services'
          | 'miscellaneous_home_furnishing_specialty_stores'
          | 'miscellaneous_publishing_and_printing'
          | 'miscellaneous_recreation_services'
          | 'miscellaneous_repair_shops'
          | 'miscellaneous_specialty_retail'
          | 'mobile_home_dealers'
          | 'motion_picture_theaters'
          | 'motor_freight_carriers_and_trucking'
          | 'motor_homes_dealers'
          | 'motor_vehicle_supplies_and_new_parts'
          | 'motorcycle_shops_and_dealers'
          | 'motorcycle_shops_dealers'
          | 'music_stores_musical_instruments_pianos_and_sheet_music'
          | 'news_dealers_and_newsstands'
          | 'non_fi_money_orders'
          | 'non_fi_stored_value_card_purchase_load'
          | 'nondurable_goods'
          | 'nurseries_lawn_and_garden_supply_stores'
          | 'nursing_personal_care'
          | 'office_and_commercial_furniture'
          | 'opticians_eyeglasses'
          | 'optometrists_ophthalmologist'
          | 'orthopedic_goods_prosthetic_devices'
          | 'osteopaths'
          | 'package_stores_beer_wine_and_liquor'
          | 'paints_varnishes_and_supplies'
          | 'parking_lots_garages'
          | 'passenger_railways'
          | 'pawn_shops'
          | 'pet_shops_pet_food_and_supplies'
          | 'petroleum_and_petroleum_products'
          | 'photo_developing'
          | 'photographic_photocopy_microfilm_equipment_and_supplies'
          | 'photographic_studios'
          | 'picture_video_production'
          | 'piece_goods_notions_and_other_dry_goods'
          | 'plumbing_heating_equipment_and_supplies'
          | 'political_organizations'
          | 'postal_services_government_only'
          | 'precious_stones_and_metals_watches_and_jewelry'
          | 'professional_services'
          | 'public_warehousing_and_storage'
          | 'quick_copy_repro_and_blueprint'
          | 'railroads'
          | 'real_estate_agents_and_managers_rentals'
          | 'record_stores'
          | 'recreational_vehicle_rentals'
          | 'religious_goods_stores'
          | 'religious_organizations'
          | 'roofing_siding_sheet_metal'
          | 'secretarial_support_services'
          | 'security_brokers_dealers'
          | 'service_stations'
          | 'sewing_needlework_fabric_and_piece_goods_stores'
          | 'shoe_repair_hat_cleaning'
          | 'shoe_stores'
          | 'small_appliance_repair'
          | 'snowmobile_dealers'
          | 'special_trade_services'
          | 'specialty_cleaning'
          | 'sporting_goods_stores'
          | 'sporting_recreation_camps'
          | 'sports_and_riding_apparel_stores'
          | 'sports_clubs_fields'
          | 'stamp_and_coin_stores'
          | 'stationary_office_supplies_printing_and_writing_paper'
          | 'stationery_stores_office_and_school_supply_stores'
          | 'swimming_pools_sales'
          | 't_ui_travel_germany'
          | 'tailors_alterations'
          | 'tax_payments_government_agencies'
          | 'tax_preparation_services'
          | 'taxicabs_limousines'
          | 'telecommunication_equipment_and_telephone_sales'
          | 'telecommunication_services'
          | 'telegraph_services'
          | 'tent_and_awning_shops'
          | 'testing_laboratories'
          | 'theatrical_ticket_agencies'
          | 'timeshares'
          | 'tire_retreading_and_repair'
          | 'tolls_bridge_fees'
          | 'tourist_attractions_and_exhibits'
          | 'towing_services'
          | 'trailer_parks_campgrounds'
          | 'transportation_services'
          | 'travel_agencies_tour_operators'
          | 'truck_stop_iteration'
          | 'truck_utility_trailer_rentals'
          | 'typesetting_plate_making_and_related_services'
          | 'typewriter_stores'
          | 'u_s_federal_government_agencies_or_departments'
          | 'uniforms_commercial_clothing'
          | 'used_merchandise_and_secondhand_stores'
          | 'utilities'
          | 'variety_stores'
          | 'veterinary_services'
          | 'video_amusement_game_supplies'
          | 'video_game_arcades'
          | 'video_tape_rental_stores'
          | 'vocational_trade_schools'
          | 'watch_jewelry_repair'
          | 'welding_repair'
          | 'wholesale_clubs'
          | 'wig_and_toupee_stores'
          | 'wires_money_orders'
          | 'womens_accessory_and_specialty_shops'
          | 'womens_ready_to_wear_stores'
          | 'wrecking_and_salvage_yards'

        interface SpendingLimit {
          /**
           * Maximum amount allowed to spend per time interval.
           */
          amount: number;

          /**
           * Array of strings containing [categories](https://stripe.com/docs/api#issuing_authorization_object-merchant_data-category) on which to apply the spending limit. Leave this blank to limit all charges.
           */
          categories?: Array<SpendingLimit.Category>;

          /**
           * The time interval with which to apply this spending limit towards. Allowed values are 'per_authorization', 'daily', 'weekly', 'monthly', 'yearly', and 'all_time'.
           */
          interval: SpendingLimit.Interval;
        }

        namespace SpendingLimit {
          type Category =
            | 'ac_refrigeration_repair'
            | 'accounting_bookkeeping_services'
            | 'advertising_services'
            | 'agricultural_cooperative'
            | 'airlines_air_carriers'
            | 'airports_flying_fields'
            | 'ambulance_services'
            | 'amusement_parks_carnivals'
            | 'antique_reproductions'
            | 'antique_shops'
            | 'aquariums'
            | 'architectural_surveying_services'
            | 'art_dealers_and_galleries'
            | 'artists_supply_and_craft_shops'
            | 'auto_and_home_supply_stores'
            | 'auto_body_repair_shops'
            | 'auto_paint_shops'
            | 'auto_service_shops'
            | 'automated_cash_disburse'
            | 'automated_fuel_dispensers'
            | 'automobile_associations'
            | 'automotive_parts_and_accessories_stores'
            | 'automotive_tire_stores'
            | 'bail_and_bond_payments'
            | 'bakeries'
            | 'bands_orchestras'
            | 'barber_and_beauty_shops'
            | 'betting_casino_gambling'
            | 'bicycle_shops'
            | 'billiard_pool_establishments'
            | 'boat_dealers'
            | 'boat_rentals_and_leases'
            | 'book_stores'
            | 'books_periodicals_and_newspapers'
            | 'bowling_alleys'
            | 'bus_lines'
            | 'business_secretarial_schools'
            | 'buying_shopping_services'
            | 'cable_satellite_and_other_pay_television_and_radio'
            | 'camera_and_photographic_supply_stores'
            | 'candy_nut_and_confectionery_stores'
            | 'car_and_truck_dealers_new_used'
            | 'car_and_truck_dealers_used_only'
            | 'car_rental_agencies'
            | 'car_washes'
            | 'carpentry_services'
            | 'carpet_upholstery_cleaning'
            | 'caterers'
            | 'charitable_and_social_service_organizations_fundraising'
            | 'chemicals_and_allied_products'
            | 'child_care_services'
            | 'childrens_and_infants_wear_stores'
            | 'chiropodists_podiatrists'
            | 'chiropractors'
            | 'cigar_stores_and_stands'
            | 'civic_social_fraternal_associations'
            | 'cleaning_and_maintenance'
            | 'clothing_rental'
            | 'colleges_universities'
            | 'commercial_equipment'
            | 'commercial_footwear'
            | 'commercial_photography_art_and_graphics'
            | 'commuter_transport_and_ferries'
            | 'computer_network_services'
            | 'computer_programming'
            | 'computer_repair'
            | 'computer_software_stores'
            | 'computers_peripherals_and_software'
            | 'concrete_work_services'
            | 'construction_materials'
            | 'consulting_public_relations'
            | 'correspondence_schools'
            | 'cosmetic_stores'
            | 'counseling_services'
            | 'country_clubs'
            | 'courier_services'
            | 'court_costs'
            | 'credit_reporting_agencies'
            | 'cruise_lines'
            | 'dairy_products_stores'
            | 'dance_hall_studios_schools'
            | 'dating_escort_services'
            | 'dentists_orthodontists'
            | 'department_stores'
            | 'detective_agencies'
            | 'digital_goods_applications'
            | 'digital_goods_games'
            | 'digital_goods_large_volume'
            | 'digital_goods_media'
            | 'direct_marketing_catalog_merchant'
            | 'direct_marketing_combination_catalog_and_retail_merchant'
            | 'direct_marketing_inbound_telemarketing'
            | 'direct_marketing_insurance_services'
            | 'direct_marketing_other'
            | 'direct_marketing_outbound_telemarketing'
            | 'direct_marketing_subscription'
            | 'direct_marketing_travel'
            | 'discount_stores'
            | 'doctors'
            | 'door_to_door_sales'
            | 'drapery_window_covering_and_upholstery_stores'
            | 'drinking_places'
            | 'drug_stores_and_pharmacies'
            | 'drugs_drug_proprietaries_and_druggist_sundries'
            | 'dry_cleaners'
            | 'durable_goods'
            | 'duty_free_stores'
            | 'eating_places_restaurants'
            | 'educational_services'
            | 'electric_razor_stores'
            | 'electrical_parts_and_equipment'
            | 'electrical_services'
            | 'electronics_repair_shops'
            | 'electronics_stores'
            | 'elementary_secondary_schools'
            | 'employment_temp_agencies'
            | 'equipment_rental'
            | 'exterminating_services'
            | 'family_clothing_stores'
            | 'fast_food_restaurants'
            | 'financial_institutions'
            | 'fines_government_administrative_entities'
            | 'fireplace_fireplace_screens_and_accessories_stores'
            | 'floor_covering_stores'
            | 'florists'
            | 'florists_supplies_nursery_stock_and_flowers'
            | 'freezer_and_locker_meat_provisioners'
            | 'fuel_dealers_non_automotive'
            | 'funeral_services_crematories'
            | 'furniture_home_furnishings_and_equipment_stores_except_appliances'
            | 'furniture_repair_refinishing'
            | 'furriers_and_fur_shops'
            | 'general_services'
            | 'gift_card_novelty_and_souvenir_shops'
            | 'glass_paint_and_wallpaper_stores'
            | 'glassware_crystal_stores'
            | 'golf_courses_public'
            | 'government_services'
            | 'grocery_stores_supermarkets'
            | 'hardware_equipment_and_supplies'
            | 'hardware_stores'
            | 'health_and_beauty_spas'
            | 'hearing_aids_sales_and_supplies'
            | 'heating_plumbing_a_c'
            | 'hobby_toy_and_game_shops'
            | 'home_supply_warehouse_stores'
            | 'hospitals'
            | 'hotels_motels_and_resorts'
            | 'household_appliance_stores'
            | 'industrial_supplies'
            | 'information_retrieval_services'
            | 'insurance_default'
            | 'insurance_underwriting_premiums'
            | 'intra_company_purchases'
            | 'jewelry_stores_watches_clocks_and_silverware_stores'
            | 'landscaping_services'
            | 'laundries'
            | 'laundry_cleaning_services'
            | 'legal_services_attorneys'
            | 'luggage_and_leather_goods_stores'
            | 'lumber_building_materials_stores'
            | 'manual_cash_disburse'
            | 'marinas_service_and_supplies'
            | 'masonry_stonework_and_plaster'
            | 'massage_parlors'
            | 'medical_and_dental_labs'
            | 'medical_dental_ophthalmic_and_hospital_equipment_and_supplies'
            | 'medical_services'
            | 'membership_organizations'
            | 'mens_and_boys_clothing_and_accessories_stores'
            | 'mens_womens_clothing_stores'
            | 'metal_service_centers'
            | 'miscellaneous'
            | 'miscellaneous_apparel_and_accessory_shops'
            | 'miscellaneous_auto_dealers'
            | 'miscellaneous_business_services'
            | 'miscellaneous_food_stores'
            | 'miscellaneous_general_merchandise'
            | 'miscellaneous_general_services'
            | 'miscellaneous_home_furnishing_specialty_stores'
            | 'miscellaneous_publishing_and_printing'
            | 'miscellaneous_recreation_services'
            | 'miscellaneous_repair_shops'
            | 'miscellaneous_specialty_retail'
            | 'mobile_home_dealers'
            | 'motion_picture_theaters'
            | 'motor_freight_carriers_and_trucking'
            | 'motor_homes_dealers'
            | 'motor_vehicle_supplies_and_new_parts'
            | 'motorcycle_shops_and_dealers'
            | 'motorcycle_shops_dealers'
            | 'music_stores_musical_instruments_pianos_and_sheet_music'
            | 'news_dealers_and_newsstands'
            | 'non_fi_money_orders'
            | 'non_fi_stored_value_card_purchase_load'
            | 'nondurable_goods'
            | 'nurseries_lawn_and_garden_supply_stores'
            | 'nursing_personal_care'
            | 'office_and_commercial_furniture'
            | 'opticians_eyeglasses'
            | 'optometrists_ophthalmologist'
            | 'orthopedic_goods_prosthetic_devices'
            | 'osteopaths'
            | 'package_stores_beer_wine_and_liquor'
            | 'paints_varnishes_and_supplies'
            | 'parking_lots_garages'
            | 'passenger_railways'
            | 'pawn_shops'
            | 'pet_shops_pet_food_and_supplies'
            | 'petroleum_and_petroleum_products'
            | 'photo_developing'
            | 'photographic_photocopy_microfilm_equipment_and_supplies'
            | 'photographic_studios'
            | 'picture_video_production'
            | 'piece_goods_notions_and_other_dry_goods'
            | 'plumbing_heating_equipment_and_supplies'
            | 'political_organizations'
            | 'postal_services_government_only'
            | 'precious_stones_and_metals_watches_and_jewelry'
            | 'professional_services'
            | 'public_warehousing_and_storage'
            | 'quick_copy_repro_and_blueprint'
            | 'railroads'
            | 'real_estate_agents_and_managers_rentals'
            | 'record_stores'
            | 'recreational_vehicle_rentals'
            | 'religious_goods_stores'
            | 'religious_organizations'
            | 'roofing_siding_sheet_metal'
            | 'secretarial_support_services'
            | 'security_brokers_dealers'
            | 'service_stations'
            | 'sewing_needlework_fabric_and_piece_goods_stores'
            | 'shoe_repair_hat_cleaning'
            | 'shoe_stores'
            | 'small_appliance_repair'
            | 'snowmobile_dealers'
            | 'special_trade_services'
            | 'specialty_cleaning'
            | 'sporting_goods_stores'
            | 'sporting_recreation_camps'
            | 'sports_and_riding_apparel_stores'
            | 'sports_clubs_fields'
            | 'stamp_and_coin_stores'
            | 'stationary_office_supplies_printing_and_writing_paper'
            | 'stationery_stores_office_and_school_supply_stores'
            | 'swimming_pools_sales'
            | 't_ui_travel_germany'
            | 'tailors_alterations'
            | 'tax_payments_government_agencies'
            | 'tax_preparation_services'
            | 'taxicabs_limousines'
            | 'telecommunication_equipment_and_telephone_sales'
            | 'telecommunication_services'
            | 'telegraph_services'
            | 'tent_and_awning_shops'
            | 'testing_laboratories'
            | 'theatrical_ticket_agencies'
            | 'timeshares'
            | 'tire_retreading_and_repair'
            | 'tolls_bridge_fees'
            | 'tourist_attractions_and_exhibits'
            | 'towing_services'
            | 'trailer_parks_campgrounds'
            | 'transportation_services'
            | 'travel_agencies_tour_operators'
            | 'truck_stop_iteration'
            | 'truck_utility_trailer_rentals'
            | 'typesetting_plate_making_and_related_services'
            | 'typewriter_stores'
            | 'u_s_federal_government_agencies_or_departments'
            | 'uniforms_commercial_clothing'
            | 'used_merchandise_and_secondhand_stores'
            | 'utilities'
            | 'variety_stores'
            | 'veterinary_services'
            | 'video_amusement_game_supplies'
            | 'video_game_arcades'
            | 'video_tape_rental_stores'
            | 'vocational_trade_schools'
            | 'watch_jewelry_repair'
            | 'welding_repair'
            | 'wholesale_clubs'
            | 'wig_and_toupee_stores'
            | 'wires_money_orders'
            | 'womens_accessory_and_specialty_shops'
            | 'womens_ready_to_wear_stores'
            | 'wrecking_and_salvage_yards'

          type Interval =
            | 'all_time'
            | 'daily'
            | 'monthly'
            | 'per_authorization'
            | 'weekly'
            | 'yearly'
        }
      }

      type ReplacementReason = 'damage' | 'expiration' | 'loss' | 'theft'

      interface Shipping {
        address: Shipping.Address;

        name: string;

        /**
         * One of `bulk` or `individual`. Bulk shipments will be grouped and mailed together, while individual ones will not.
         */
        type?: '' | Shipping.Type;
      }

      namespace Shipping {
        interface Address {
          city: string;

          country: string;

          line1: string;

          line2?: string;

          postal_code: string;

          state?: string;
        }

        type Type = 'bulk' | 'individual'
      }

      type Status = 'active' | 'inactive'

      type Type = 'physical' | 'virtual'
    }

    /**
     * Returns a list of Issuing Card objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
     */
    interface CardListParams {
      /**
       * Only return cards belonging to the Cardholder with the provided ID.
       */
      cardholder?: string;

      /**
       * Only return cards that were issued during the given date interval.
       */
      created?: number | CardListParams.Created;

      /**
       * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
       */
      ending_before?: string;

      /**
       * Only return cards that have the given expiration month.
       */
      exp_month?: number;

      /**
       * Only return cards that have the given expiration year.
       */
      exp_year?: number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Only return cards that have the given last four digits.
       */
      last4?: string;

      /**
       * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
       */
      limit?: number;

      /**
       * Only return cards that have the given name.
       */
      name?: string;

      /**
       * Only return cards whose full card number matches that of this card source ID.
       */
      source?: string;

      /**
       * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
       */
      starting_after?: string;

      /**
       * Only return cards that have the given status. One of `active`, `inactive`, `canceled`, `lost`, or `stolen`.
       */
      status?: CardListParams.Status;

      /**
       * Only return cards that have the given type. One of `virtual` or `physical`.
       */
      type?: CardListParams.Type;
    }

    namespace CardListParams {
      interface Created {
        /**
         * Minimum value to filter by (exclusive)
         */
        gt?: number;

        /**
         * Minimum value to filter by (inclusive)
         */
        gte?: number;

        /**
         * Maximum value to filter by (exclusive)
         */
        lt?: number;

        /**
         * Maximum value to filter by (inclusive)
         */
        lte?: number;
      }

      type Status = 'active' | 'canceled' | 'inactive' | 'lost' | 'stolen'

      type Type = 'physical' | 'virtual'
    }

    /**
     * Retrieves an Issuing Card object.
     */
    interface CardRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    /**
     * Updates the specified Issuing Card object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     */
    interface CardUpdateParams {
      /**
       * Spending rules that give you some control over how your cards can be used. Refer to our [authorizations](https://stripe.com/docs/issuing/authorizations) documentation for more details.
       */
      authorization_controls?: CardUpdateParams.AuthorizationControls;

      /**
       * The [Cardholder](https://stripe.com/docs/api#issuing_cardholder_object) to associate the card with. (This field is deprecated and will be removed from future versions of the API.)
       */
      cardholder?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      metadata?:
        | {
          [key: string]: string;
        }
        | '';

      /**
       * Specifies whether to permit authorizations on this card. Possible values are `active`, `inactive`, or the terminal states: `canceled`, `lost`, `stolen`.
       */
      status?: CardUpdateParams.Status;
    }

    namespace CardUpdateParams {
      interface AuthorizationControls {
        /**
         * Array of strings containing [categories](https://stripe.com/docs/api#issuing_authorization_object-merchant_data-category) of authorizations permitted on this card.
         */
        allowed_categories?: Array<AuthorizationControls.AllowedCategory>;

        /**
         * Array of strings containing [categories](https://stripe.com/docs/api#issuing_authorization_object-merchant_data-category) of authorizations to always decline on this card.
         */
        blocked_categories?: Array<AuthorizationControls.BlockedCategory>;

        /**
         * Maximum count of approved authorizations on this card. Counts all authorizations retroactively.
         */
        max_approvals?: number;

        /**
         * Limit the spending with rules based on time intervals and categories.
         */
        spending_limits?: Array<AuthorizationControls.SpendingLimit>;
      }

      namespace AuthorizationControls {
        type AllowedCategory =
          | 'ac_refrigeration_repair'
          | 'accounting_bookkeeping_services'
          | 'advertising_services'
          | 'agricultural_cooperative'
          | 'airlines_air_carriers'
          | 'airports_flying_fields'
          | 'ambulance_services'
          | 'amusement_parks_carnivals'
          | 'antique_reproductions'
          | 'antique_shops'
          | 'aquariums'
          | 'architectural_surveying_services'
          | 'art_dealers_and_galleries'
          | 'artists_supply_and_craft_shops'
          | 'auto_and_home_supply_stores'
          | 'auto_body_repair_shops'
          | 'auto_paint_shops'
          | 'auto_service_shops'
          | 'automated_cash_disburse'
          | 'automated_fuel_dispensers'
          | 'automobile_associations'
          | 'automotive_parts_and_accessories_stores'
          | 'automotive_tire_stores'
          | 'bail_and_bond_payments'
          | 'bakeries'
          | 'bands_orchestras'
          | 'barber_and_beauty_shops'
          | 'betting_casino_gambling'
          | 'bicycle_shops'
          | 'billiard_pool_establishments'
          | 'boat_dealers'
          | 'boat_rentals_and_leases'
          | 'book_stores'
          | 'books_periodicals_and_newspapers'
          | 'bowling_alleys'
          | 'bus_lines'
          | 'business_secretarial_schools'
          | 'buying_shopping_services'
          | 'cable_satellite_and_other_pay_television_and_radio'
          | 'camera_and_photographic_supply_stores'
          | 'candy_nut_and_confectionery_stores'
          | 'car_and_truck_dealers_new_used'
          | 'car_and_truck_dealers_used_only'
          | 'car_rental_agencies'
          | 'car_washes'
          | 'carpentry_services'
          | 'carpet_upholstery_cleaning'
          | 'caterers'
          | 'charitable_and_social_service_organizations_fundraising'
          | 'chemicals_and_allied_products'
          | 'child_care_services'
          | 'childrens_and_infants_wear_stores'
          | 'chiropodists_podiatrists'
          | 'chiropractors'
          | 'cigar_stores_and_stands'
          | 'civic_social_fraternal_associations'
          | 'cleaning_and_maintenance'
          | 'clothing_rental'
          | 'colleges_universities'
          | 'commercial_equipment'
          | 'commercial_footwear'
          | 'commercial_photography_art_and_graphics'
          | 'commuter_transport_and_ferries'
          | 'computer_network_services'
          | 'computer_programming'
          | 'computer_repair'
          | 'computer_software_stores'
          | 'computers_peripherals_and_software'
          | 'concrete_work_services'
          | 'construction_materials'
          | 'consulting_public_relations'
          | 'correspondence_schools'
          | 'cosmetic_stores'
          | 'counseling_services'
          | 'country_clubs'
          | 'courier_services'
          | 'court_costs'
          | 'credit_reporting_agencies'
          | 'cruise_lines'
          | 'dairy_products_stores'
          | 'dance_hall_studios_schools'
          | 'dating_escort_services'
          | 'dentists_orthodontists'
          | 'department_stores'
          | 'detective_agencies'
          | 'digital_goods_applications'
          | 'digital_goods_games'
          | 'digital_goods_large_volume'
          | 'digital_goods_media'
          | 'direct_marketing_catalog_merchant'
          | 'direct_marketing_combination_catalog_and_retail_merchant'
          | 'direct_marketing_inbound_telemarketing'
          | 'direct_marketing_insurance_services'
          | 'direct_marketing_other'
          | 'direct_marketing_outbound_telemarketing'
          | 'direct_marketing_subscription'
          | 'direct_marketing_travel'
          | 'discount_stores'
          | 'doctors'
          | 'door_to_door_sales'
          | 'drapery_window_covering_and_upholstery_stores'
          | 'drinking_places'
          | 'drug_stores_and_pharmacies'
          | 'drugs_drug_proprietaries_and_druggist_sundries'
          | 'dry_cleaners'
          | 'durable_goods'
          | 'duty_free_stores'
          | 'eating_places_restaurants'
          | 'educational_services'
          | 'electric_razor_stores'
          | 'electrical_parts_and_equipment'
          | 'electrical_services'
          | 'electronics_repair_shops'
          | 'electronics_stores'
          | 'elementary_secondary_schools'
          | 'employment_temp_agencies'
          | 'equipment_rental'
          | 'exterminating_services'
          | 'family_clothing_stores'
          | 'fast_food_restaurants'
          | 'financial_institutions'
          | 'fines_government_administrative_entities'
          | 'fireplace_fireplace_screens_and_accessories_stores'
          | 'floor_covering_stores'
          | 'florists'
          | 'florists_supplies_nursery_stock_and_flowers'
          | 'freezer_and_locker_meat_provisioners'
          | 'fuel_dealers_non_automotive'
          | 'funeral_services_crematories'
          | 'furniture_home_furnishings_and_equipment_stores_except_appliances'
          | 'furniture_repair_refinishing'
          | 'furriers_and_fur_shops'
          | 'general_services'
          | 'gift_card_novelty_and_souvenir_shops'
          | 'glass_paint_and_wallpaper_stores'
          | 'glassware_crystal_stores'
          | 'golf_courses_public'
          | 'government_services'
          | 'grocery_stores_supermarkets'
          | 'hardware_equipment_and_supplies'
          | 'hardware_stores'
          | 'health_and_beauty_spas'
          | 'hearing_aids_sales_and_supplies'
          | 'heating_plumbing_a_c'
          | 'hobby_toy_and_game_shops'
          | 'home_supply_warehouse_stores'
          | 'hospitals'
          | 'hotels_motels_and_resorts'
          | 'household_appliance_stores'
          | 'industrial_supplies'
          | 'information_retrieval_services'
          | 'insurance_default'
          | 'insurance_underwriting_premiums'
          | 'intra_company_purchases'
          | 'jewelry_stores_watches_clocks_and_silverware_stores'
          | 'landscaping_services'
          | 'laundries'
          | 'laundry_cleaning_services'
          | 'legal_services_attorneys'
          | 'luggage_and_leather_goods_stores'
          | 'lumber_building_materials_stores'
          | 'manual_cash_disburse'
          | 'marinas_service_and_supplies'
          | 'masonry_stonework_and_plaster'
          | 'massage_parlors'
          | 'medical_and_dental_labs'
          | 'medical_dental_ophthalmic_and_hospital_equipment_and_supplies'
          | 'medical_services'
          | 'membership_organizations'
          | 'mens_and_boys_clothing_and_accessories_stores'
          | 'mens_womens_clothing_stores'
          | 'metal_service_centers'
          | 'miscellaneous'
          | 'miscellaneous_apparel_and_accessory_shops'
          | 'miscellaneous_auto_dealers'
          | 'miscellaneous_business_services'
          | 'miscellaneous_food_stores'
          | 'miscellaneous_general_merchandise'
          | 'miscellaneous_general_services'
          | 'miscellaneous_home_furnishing_specialty_stores'
          | 'miscellaneous_publishing_and_printing'
          | 'miscellaneous_recreation_services'
          | 'miscellaneous_repair_shops'
          | 'miscellaneous_specialty_retail'
          | 'mobile_home_dealers'
          | 'motion_picture_theaters'
          | 'motor_freight_carriers_and_trucking'
          | 'motor_homes_dealers'
          | 'motor_vehicle_supplies_and_new_parts'
          | 'motorcycle_shops_and_dealers'
          | 'motorcycle_shops_dealers'
          | 'music_stores_musical_instruments_pianos_and_sheet_music'
          | 'news_dealers_and_newsstands'
          | 'non_fi_money_orders'
          | 'non_fi_stored_value_card_purchase_load'
          | 'nondurable_goods'
          | 'nurseries_lawn_and_garden_supply_stores'
          | 'nursing_personal_care'
          | 'office_and_commercial_furniture'
          | 'opticians_eyeglasses'
          | 'optometrists_ophthalmologist'
          | 'orthopedic_goods_prosthetic_devices'
          | 'osteopaths'
          | 'package_stores_beer_wine_and_liquor'
          | 'paints_varnishes_and_supplies'
          | 'parking_lots_garages'
          | 'passenger_railways'
          | 'pawn_shops'
          | 'pet_shops_pet_food_and_supplies'
          | 'petroleum_and_petroleum_products'
          | 'photo_developing'
          | 'photographic_photocopy_microfilm_equipment_and_supplies'
          | 'photographic_studios'
          | 'picture_video_production'
          | 'piece_goods_notions_and_other_dry_goods'
          | 'plumbing_heating_equipment_and_supplies'
          | 'political_organizations'
          | 'postal_services_government_only'
          | 'precious_stones_and_metals_watches_and_jewelry'
          | 'professional_services'
          | 'public_warehousing_and_storage'
          | 'quick_copy_repro_and_blueprint'
          | 'railroads'
          | 'real_estate_agents_and_managers_rentals'
          | 'record_stores'
          | 'recreational_vehicle_rentals'
          | 'religious_goods_stores'
          | 'religious_organizations'
          | 'roofing_siding_sheet_metal'
          | 'secretarial_support_services'
          | 'security_brokers_dealers'
          | 'service_stations'
          | 'sewing_needlework_fabric_and_piece_goods_stores'
          | 'shoe_repair_hat_cleaning'
          | 'shoe_stores'
          | 'small_appliance_repair'
          | 'snowmobile_dealers'
          | 'special_trade_services'
          | 'specialty_cleaning'
          | 'sporting_goods_stores'
          | 'sporting_recreation_camps'
          | 'sports_and_riding_apparel_stores'
          | 'sports_clubs_fields'
          | 'stamp_and_coin_stores'
          | 'stationary_office_supplies_printing_and_writing_paper'
          | 'stationery_stores_office_and_school_supply_stores'
          | 'swimming_pools_sales'
          | 't_ui_travel_germany'
          | 'tailors_alterations'
          | 'tax_payments_government_agencies'
          | 'tax_preparation_services'
          | 'taxicabs_limousines'
          | 'telecommunication_equipment_and_telephone_sales'
          | 'telecommunication_services'
          | 'telegraph_services'
          | 'tent_and_awning_shops'
          | 'testing_laboratories'
          | 'theatrical_ticket_agencies'
          | 'timeshares'
          | 'tire_retreading_and_repair'
          | 'tolls_bridge_fees'
          | 'tourist_attractions_and_exhibits'
          | 'towing_services'
          | 'trailer_parks_campgrounds'
          | 'transportation_services'
          | 'travel_agencies_tour_operators'
          | 'truck_stop_iteration'
          | 'truck_utility_trailer_rentals'
          | 'typesetting_plate_making_and_related_services'
          | 'typewriter_stores'
          | 'u_s_federal_government_agencies_or_departments'
          | 'uniforms_commercial_clothing'
          | 'used_merchandise_and_secondhand_stores'
          | 'utilities'
          | 'variety_stores'
          | 'veterinary_services'
          | 'video_amusement_game_supplies'
          | 'video_game_arcades'
          | 'video_tape_rental_stores'
          | 'vocational_trade_schools'
          | 'watch_jewelry_repair'
          | 'welding_repair'
          | 'wholesale_clubs'
          | 'wig_and_toupee_stores'
          | 'wires_money_orders'
          | 'womens_accessory_and_specialty_shops'
          | 'womens_ready_to_wear_stores'
          | 'wrecking_and_salvage_yards'

        type BlockedCategory =
          | 'ac_refrigeration_repair'
          | 'accounting_bookkeeping_services'
          | 'advertising_services'
          | 'agricultural_cooperative'
          | 'airlines_air_carriers'
          | 'airports_flying_fields'
          | 'ambulance_services'
          | 'amusement_parks_carnivals'
          | 'antique_reproductions'
          | 'antique_shops'
          | 'aquariums'
          | 'architectural_surveying_services'
          | 'art_dealers_and_galleries'
          | 'artists_supply_and_craft_shops'
          | 'auto_and_home_supply_stores'
          | 'auto_body_repair_shops'
          | 'auto_paint_shops'
          | 'auto_service_shops'
          | 'automated_cash_disburse'
          | 'automated_fuel_dispensers'
          | 'automobile_associations'
          | 'automotive_parts_and_accessories_stores'
          | 'automotive_tire_stores'
          | 'bail_and_bond_payments'
          | 'bakeries'
          | 'bands_orchestras'
          | 'barber_and_beauty_shops'
          | 'betting_casino_gambling'
          | 'bicycle_shops'
          | 'billiard_pool_establishments'
          | 'boat_dealers'
          | 'boat_rentals_and_leases'
          | 'book_stores'
          | 'books_periodicals_and_newspapers'
          | 'bowling_alleys'
          | 'bus_lines'
          | 'business_secretarial_schools'
          | 'buying_shopping_services'
          | 'cable_satellite_and_other_pay_television_and_radio'
          | 'camera_and_photographic_supply_stores'
          | 'candy_nut_and_confectionery_stores'
          | 'car_and_truck_dealers_new_used'
          | 'car_and_truck_dealers_used_only'
          | 'car_rental_agencies'
          | 'car_washes'
          | 'carpentry_services'
          | 'carpet_upholstery_cleaning'
          | 'caterers'
          | 'charitable_and_social_service_organizations_fundraising'
          | 'chemicals_and_allied_products'
          | 'child_care_services'
          | 'childrens_and_infants_wear_stores'
          | 'chiropodists_podiatrists'
          | 'chiropractors'
          | 'cigar_stores_and_stands'
          | 'civic_social_fraternal_associations'
          | 'cleaning_and_maintenance'
          | 'clothing_rental'
          | 'colleges_universities'
          | 'commercial_equipment'
          | 'commercial_footwear'
          | 'commercial_photography_art_and_graphics'
          | 'commuter_transport_and_ferries'
          | 'computer_network_services'
          | 'computer_programming'
          | 'computer_repair'
          | 'computer_software_stores'
          | 'computers_peripherals_and_software'
          | 'concrete_work_services'
          | 'construction_materials'
          | 'consulting_public_relations'
          | 'correspondence_schools'
          | 'cosmetic_stores'
          | 'counseling_services'
          | 'country_clubs'
          | 'courier_services'
          | 'court_costs'
          | 'credit_reporting_agencies'
          | 'cruise_lines'
          | 'dairy_products_stores'
          | 'dance_hall_studios_schools'
          | 'dating_escort_services'
          | 'dentists_orthodontists'
          | 'department_stores'
          | 'detective_agencies'
          | 'digital_goods_applications'
          | 'digital_goods_games'
          | 'digital_goods_large_volume'
          | 'digital_goods_media'
          | 'direct_marketing_catalog_merchant'
          | 'direct_marketing_combination_catalog_and_retail_merchant'
          | 'direct_marketing_inbound_telemarketing'
          | 'direct_marketing_insurance_services'
          | 'direct_marketing_other'
          | 'direct_marketing_outbound_telemarketing'
          | 'direct_marketing_subscription'
          | 'direct_marketing_travel'
          | 'discount_stores'
          | 'doctors'
          | 'door_to_door_sales'
          | 'drapery_window_covering_and_upholstery_stores'
          | 'drinking_places'
          | 'drug_stores_and_pharmacies'
          | 'drugs_drug_proprietaries_and_druggist_sundries'
          | 'dry_cleaners'
          | 'durable_goods'
          | 'duty_free_stores'
          | 'eating_places_restaurants'
          | 'educational_services'
          | 'electric_razor_stores'
          | 'electrical_parts_and_equipment'
          | 'electrical_services'
          | 'electronics_repair_shops'
          | 'electronics_stores'
          | 'elementary_secondary_schools'
          | 'employment_temp_agencies'
          | 'equipment_rental'
          | 'exterminating_services'
          | 'family_clothing_stores'
          | 'fast_food_restaurants'
          | 'financial_institutions'
          | 'fines_government_administrative_entities'
          | 'fireplace_fireplace_screens_and_accessories_stores'
          | 'floor_covering_stores'
          | 'florists'
          | 'florists_supplies_nursery_stock_and_flowers'
          | 'freezer_and_locker_meat_provisioners'
          | 'fuel_dealers_non_automotive'
          | 'funeral_services_crematories'
          | 'furniture_home_furnishings_and_equipment_stores_except_appliances'
          | 'furniture_repair_refinishing'
          | 'furriers_and_fur_shops'
          | 'general_services'
          | 'gift_card_novelty_and_souvenir_shops'
          | 'glass_paint_and_wallpaper_stores'
          | 'glassware_crystal_stores'
          | 'golf_courses_public'
          | 'government_services'
          | 'grocery_stores_supermarkets'
          | 'hardware_equipment_and_supplies'
          | 'hardware_stores'
          | 'health_and_beauty_spas'
          | 'hearing_aids_sales_and_supplies'
          | 'heating_plumbing_a_c'
          | 'hobby_toy_and_game_shops'
          | 'home_supply_warehouse_stores'
          | 'hospitals'
          | 'hotels_motels_and_resorts'
          | 'household_appliance_stores'
          | 'industrial_supplies'
          | 'information_retrieval_services'
          | 'insurance_default'
          | 'insurance_underwriting_premiums'
          | 'intra_company_purchases'
          | 'jewelry_stores_watches_clocks_and_silverware_stores'
          | 'landscaping_services'
          | 'laundries'
          | 'laundry_cleaning_services'
          | 'legal_services_attorneys'
          | 'luggage_and_leather_goods_stores'
          | 'lumber_building_materials_stores'
          | 'manual_cash_disburse'
          | 'marinas_service_and_supplies'
          | 'masonry_stonework_and_plaster'
          | 'massage_parlors'
          | 'medical_and_dental_labs'
          | 'medical_dental_ophthalmic_and_hospital_equipment_and_supplies'
          | 'medical_services'
          | 'membership_organizations'
          | 'mens_and_boys_clothing_and_accessories_stores'
          | 'mens_womens_clothing_stores'
          | 'metal_service_centers'
          | 'miscellaneous'
          | 'miscellaneous_apparel_and_accessory_shops'
          | 'miscellaneous_auto_dealers'
          | 'miscellaneous_business_services'
          | 'miscellaneous_food_stores'
          | 'miscellaneous_general_merchandise'
          | 'miscellaneous_general_services'
          | 'miscellaneous_home_furnishing_specialty_stores'
          | 'miscellaneous_publishing_and_printing'
          | 'miscellaneous_recreation_services'
          | 'miscellaneous_repair_shops'
          | 'miscellaneous_specialty_retail'
          | 'mobile_home_dealers'
          | 'motion_picture_theaters'
          | 'motor_freight_carriers_and_trucking'
          | 'motor_homes_dealers'
          | 'motor_vehicle_supplies_and_new_parts'
          | 'motorcycle_shops_and_dealers'
          | 'motorcycle_shops_dealers'
          | 'music_stores_musical_instruments_pianos_and_sheet_music'
          | 'news_dealers_and_newsstands'
          | 'non_fi_money_orders'
          | 'non_fi_stored_value_card_purchase_load'
          | 'nondurable_goods'
          | 'nurseries_lawn_and_garden_supply_stores'
          | 'nursing_personal_care'
          | 'office_and_commercial_furniture'
          | 'opticians_eyeglasses'
          | 'optometrists_ophthalmologist'
          | 'orthopedic_goods_prosthetic_devices'
          | 'osteopaths'
          | 'package_stores_beer_wine_and_liquor'
          | 'paints_varnishes_and_supplies'
          | 'parking_lots_garages'
          | 'passenger_railways'
          | 'pawn_shops'
          | 'pet_shops_pet_food_and_supplies'
          | 'petroleum_and_petroleum_products'
          | 'photo_developing'
          | 'photographic_photocopy_microfilm_equipment_and_supplies'
          | 'photographic_studios'
          | 'picture_video_production'
          | 'piece_goods_notions_and_other_dry_goods'
          | 'plumbing_heating_equipment_and_supplies'
          | 'political_organizations'
          | 'postal_services_government_only'
          | 'precious_stones_and_metals_watches_and_jewelry'
          | 'professional_services'
          | 'public_warehousing_and_storage'
          | 'quick_copy_repro_and_blueprint'
          | 'railroads'
          | 'real_estate_agents_and_managers_rentals'
          | 'record_stores'
          | 'recreational_vehicle_rentals'
          | 'religious_goods_stores'
          | 'religious_organizations'
          | 'roofing_siding_sheet_metal'
          | 'secretarial_support_services'
          | 'security_brokers_dealers'
          | 'service_stations'
          | 'sewing_needlework_fabric_and_piece_goods_stores'
          | 'shoe_repair_hat_cleaning'
          | 'shoe_stores'
          | 'small_appliance_repair'
          | 'snowmobile_dealers'
          | 'special_trade_services'
          | 'specialty_cleaning'
          | 'sporting_goods_stores'
          | 'sporting_recreation_camps'
          | 'sports_and_riding_apparel_stores'
          | 'sports_clubs_fields'
          | 'stamp_and_coin_stores'
          | 'stationary_office_supplies_printing_and_writing_paper'
          | 'stationery_stores_office_and_school_supply_stores'
          | 'swimming_pools_sales'
          | 't_ui_travel_germany'
          | 'tailors_alterations'
          | 'tax_payments_government_agencies'
          | 'tax_preparation_services'
          | 'taxicabs_limousines'
          | 'telecommunication_equipment_and_telephone_sales'
          | 'telecommunication_services'
          | 'telegraph_services'
          | 'tent_and_awning_shops'
          | 'testing_laboratories'
          | 'theatrical_ticket_agencies'
          | 'timeshares'
          | 'tire_retreading_and_repair'
          | 'tolls_bridge_fees'
          | 'tourist_attractions_and_exhibits'
          | 'towing_services'
          | 'trailer_parks_campgrounds'
          | 'transportation_services'
          | 'travel_agencies_tour_operators'
          | 'truck_stop_iteration'
          | 'truck_utility_trailer_rentals'
          | 'typesetting_plate_making_and_related_services'
          | 'typewriter_stores'
          | 'u_s_federal_government_agencies_or_departments'
          | 'uniforms_commercial_clothing'
          | 'used_merchandise_and_secondhand_stores'
          | 'utilities'
          | 'variety_stores'
          | 'veterinary_services'
          | 'video_amusement_game_supplies'
          | 'video_game_arcades'
          | 'video_tape_rental_stores'
          | 'vocational_trade_schools'
          | 'watch_jewelry_repair'
          | 'welding_repair'
          | 'wholesale_clubs'
          | 'wig_and_toupee_stores'
          | 'wires_money_orders'
          | 'womens_accessory_and_specialty_shops'
          | 'womens_ready_to_wear_stores'
          | 'wrecking_and_salvage_yards'

        interface SpendingLimit {
          /**
           * Maximum amount allowed to spend per time interval.
           */
          amount: number;

          /**
           * Array of strings containing [categories](https://stripe.com/docs/api#issuing_authorization_object-merchant_data-category) on which to apply the spending limit. Leave this blank to limit all charges.
           */
          categories?: Array<SpendingLimit.Category>;

          /**
           * The time interval with which to apply this spending limit towards. Allowed values are 'per_authorization', 'daily', 'weekly', 'monthly', 'yearly', and 'all_time'.
           */
          interval: SpendingLimit.Interval;
        }

        namespace SpendingLimit {
          type Category =
            | 'ac_refrigeration_repair'
            | 'accounting_bookkeeping_services'
            | 'advertising_services'
            | 'agricultural_cooperative'
            | 'airlines_air_carriers'
            | 'airports_flying_fields'
            | 'ambulance_services'
            | 'amusement_parks_carnivals'
            | 'antique_reproductions'
            | 'antique_shops'
            | 'aquariums'
            | 'architectural_surveying_services'
            | 'art_dealers_and_galleries'
            | 'artists_supply_and_craft_shops'
            | 'auto_and_home_supply_stores'
            | 'auto_body_repair_shops'
            | 'auto_paint_shops'
            | 'auto_service_shops'
            | 'automated_cash_disburse'
            | 'automated_fuel_dispensers'
            | 'automobile_associations'
            | 'automotive_parts_and_accessories_stores'
            | 'automotive_tire_stores'
            | 'bail_and_bond_payments'
            | 'bakeries'
            | 'bands_orchestras'
            | 'barber_and_beauty_shops'
            | 'betting_casino_gambling'
            | 'bicycle_shops'
            | 'billiard_pool_establishments'
            | 'boat_dealers'
            | 'boat_rentals_and_leases'
            | 'book_stores'
            | 'books_periodicals_and_newspapers'
            | 'bowling_alleys'
            | 'bus_lines'
            | 'business_secretarial_schools'
            | 'buying_shopping_services'
            | 'cable_satellite_and_other_pay_television_and_radio'
            | 'camera_and_photographic_supply_stores'
            | 'candy_nut_and_confectionery_stores'
            | 'car_and_truck_dealers_new_used'
            | 'car_and_truck_dealers_used_only'
            | 'car_rental_agencies'
            | 'car_washes'
            | 'carpentry_services'
            | 'carpet_upholstery_cleaning'
            | 'caterers'
            | 'charitable_and_social_service_organizations_fundraising'
            | 'chemicals_and_allied_products'
            | 'child_care_services'
            | 'childrens_and_infants_wear_stores'
            | 'chiropodists_podiatrists'
            | 'chiropractors'
            | 'cigar_stores_and_stands'
            | 'civic_social_fraternal_associations'
            | 'cleaning_and_maintenance'
            | 'clothing_rental'
            | 'colleges_universities'
            | 'commercial_equipment'
            | 'commercial_footwear'
            | 'commercial_photography_art_and_graphics'
            | 'commuter_transport_and_ferries'
            | 'computer_network_services'
            | 'computer_programming'
            | 'computer_repair'
            | 'computer_software_stores'
            | 'computers_peripherals_and_software'
            | 'concrete_work_services'
            | 'construction_materials'
            | 'consulting_public_relations'
            | 'correspondence_schools'
            | 'cosmetic_stores'
            | 'counseling_services'
            | 'country_clubs'
            | 'courier_services'
            | 'court_costs'
            | 'credit_reporting_agencies'
            | 'cruise_lines'
            | 'dairy_products_stores'
            | 'dance_hall_studios_schools'
            | 'dating_escort_services'
            | 'dentists_orthodontists'
            | 'department_stores'
            | 'detective_agencies'
            | 'digital_goods_applications'
            | 'digital_goods_games'
            | 'digital_goods_large_volume'
            | 'digital_goods_media'
            | 'direct_marketing_catalog_merchant'
            | 'direct_marketing_combination_catalog_and_retail_merchant'
            | 'direct_marketing_inbound_telemarketing'
            | 'direct_marketing_insurance_services'
            | 'direct_marketing_other'
            | 'direct_marketing_outbound_telemarketing'
            | 'direct_marketing_subscription'
            | 'direct_marketing_travel'
            | 'discount_stores'
            | 'doctors'
            | 'door_to_door_sales'
            | 'drapery_window_covering_and_upholstery_stores'
            | 'drinking_places'
            | 'drug_stores_and_pharmacies'
            | 'drugs_drug_proprietaries_and_druggist_sundries'
            | 'dry_cleaners'
            | 'durable_goods'
            | 'duty_free_stores'
            | 'eating_places_restaurants'
            | 'educational_services'
            | 'electric_razor_stores'
            | 'electrical_parts_and_equipment'
            | 'electrical_services'
            | 'electronics_repair_shops'
            | 'electronics_stores'
            | 'elementary_secondary_schools'
            | 'employment_temp_agencies'
            | 'equipment_rental'
            | 'exterminating_services'
            | 'family_clothing_stores'
            | 'fast_food_restaurants'
            | 'financial_institutions'
            | 'fines_government_administrative_entities'
            | 'fireplace_fireplace_screens_and_accessories_stores'
            | 'floor_covering_stores'
            | 'florists'
            | 'florists_supplies_nursery_stock_and_flowers'
            | 'freezer_and_locker_meat_provisioners'
            | 'fuel_dealers_non_automotive'
            | 'funeral_services_crematories'
            | 'furniture_home_furnishings_and_equipment_stores_except_appliances'
            | 'furniture_repair_refinishing'
            | 'furriers_and_fur_shops'
            | 'general_services'
            | 'gift_card_novelty_and_souvenir_shops'
            | 'glass_paint_and_wallpaper_stores'
            | 'glassware_crystal_stores'
            | 'golf_courses_public'
            | 'government_services'
            | 'grocery_stores_supermarkets'
            | 'hardware_equipment_and_supplies'
            | 'hardware_stores'
            | 'health_and_beauty_spas'
            | 'hearing_aids_sales_and_supplies'
            | 'heating_plumbing_a_c'
            | 'hobby_toy_and_game_shops'
            | 'home_supply_warehouse_stores'
            | 'hospitals'
            | 'hotels_motels_and_resorts'
            | 'household_appliance_stores'
            | 'industrial_supplies'
            | 'information_retrieval_services'
            | 'insurance_default'
            | 'insurance_underwriting_premiums'
            | 'intra_company_purchases'
            | 'jewelry_stores_watches_clocks_and_silverware_stores'
            | 'landscaping_services'
            | 'laundries'
            | 'laundry_cleaning_services'
            | 'legal_services_attorneys'
            | 'luggage_and_leather_goods_stores'
            | 'lumber_building_materials_stores'
            | 'manual_cash_disburse'
            | 'marinas_service_and_supplies'
            | 'masonry_stonework_and_plaster'
            | 'massage_parlors'
            | 'medical_and_dental_labs'
            | 'medical_dental_ophthalmic_and_hospital_equipment_and_supplies'
            | 'medical_services'
            | 'membership_organizations'
            | 'mens_and_boys_clothing_and_accessories_stores'
            | 'mens_womens_clothing_stores'
            | 'metal_service_centers'
            | 'miscellaneous'
            | 'miscellaneous_apparel_and_accessory_shops'
            | 'miscellaneous_auto_dealers'
            | 'miscellaneous_business_services'
            | 'miscellaneous_food_stores'
            | 'miscellaneous_general_merchandise'
            | 'miscellaneous_general_services'
            | 'miscellaneous_home_furnishing_specialty_stores'
            | 'miscellaneous_publishing_and_printing'
            | 'miscellaneous_recreation_services'
            | 'miscellaneous_repair_shops'
            | 'miscellaneous_specialty_retail'
            | 'mobile_home_dealers'
            | 'motion_picture_theaters'
            | 'motor_freight_carriers_and_trucking'
            | 'motor_homes_dealers'
            | 'motor_vehicle_supplies_and_new_parts'
            | 'motorcycle_shops_and_dealers'
            | 'motorcycle_shops_dealers'
            | 'music_stores_musical_instruments_pianos_and_sheet_music'
            | 'news_dealers_and_newsstands'
            | 'non_fi_money_orders'
            | 'non_fi_stored_value_card_purchase_load'
            | 'nondurable_goods'
            | 'nurseries_lawn_and_garden_supply_stores'
            | 'nursing_personal_care'
            | 'office_and_commercial_furniture'
            | 'opticians_eyeglasses'
            | 'optometrists_ophthalmologist'
            | 'orthopedic_goods_prosthetic_devices'
            | 'osteopaths'
            | 'package_stores_beer_wine_and_liquor'
            | 'paints_varnishes_and_supplies'
            | 'parking_lots_garages'
            | 'passenger_railways'
            | 'pawn_shops'
            | 'pet_shops_pet_food_and_supplies'
            | 'petroleum_and_petroleum_products'
            | 'photo_developing'
            | 'photographic_photocopy_microfilm_equipment_and_supplies'
            | 'photographic_studios'
            | 'picture_video_production'
            | 'piece_goods_notions_and_other_dry_goods'
            | 'plumbing_heating_equipment_and_supplies'
            | 'political_organizations'
            | 'postal_services_government_only'
            | 'precious_stones_and_metals_watches_and_jewelry'
            | 'professional_services'
            | 'public_warehousing_and_storage'
            | 'quick_copy_repro_and_blueprint'
            | 'railroads'
            | 'real_estate_agents_and_managers_rentals'
            | 'record_stores'
            | 'recreational_vehicle_rentals'
            | 'religious_goods_stores'
            | 'religious_organizations'
            | 'roofing_siding_sheet_metal'
            | 'secretarial_support_services'
            | 'security_brokers_dealers'
            | 'service_stations'
            | 'sewing_needlework_fabric_and_piece_goods_stores'
            | 'shoe_repair_hat_cleaning'
            | 'shoe_stores'
            | 'small_appliance_repair'
            | 'snowmobile_dealers'
            | 'special_trade_services'
            | 'specialty_cleaning'
            | 'sporting_goods_stores'
            | 'sporting_recreation_camps'
            | 'sports_and_riding_apparel_stores'
            | 'sports_clubs_fields'
            | 'stamp_and_coin_stores'
            | 'stationary_office_supplies_printing_and_writing_paper'
            | 'stationery_stores_office_and_school_supply_stores'
            | 'swimming_pools_sales'
            | 't_ui_travel_germany'
            | 'tailors_alterations'
            | 'tax_payments_government_agencies'
            | 'tax_preparation_services'
            | 'taxicabs_limousines'
            | 'telecommunication_equipment_and_telephone_sales'
            | 'telecommunication_services'
            | 'telegraph_services'
            | 'tent_and_awning_shops'
            | 'testing_laboratories'
            | 'theatrical_ticket_agencies'
            | 'timeshares'
            | 'tire_retreading_and_repair'
            | 'tolls_bridge_fees'
            | 'tourist_attractions_and_exhibits'
            | 'towing_services'
            | 'trailer_parks_campgrounds'
            | 'transportation_services'
            | 'travel_agencies_tour_operators'
            | 'truck_stop_iteration'
            | 'truck_utility_trailer_rentals'
            | 'typesetting_plate_making_and_related_services'
            | 'typewriter_stores'
            | 'u_s_federal_government_agencies_or_departments'
            | 'uniforms_commercial_clothing'
            | 'used_merchandise_and_secondhand_stores'
            | 'utilities'
            | 'variety_stores'
            | 'veterinary_services'
            | 'video_amusement_game_supplies'
            | 'video_game_arcades'
            | 'video_tape_rental_stores'
            | 'vocational_trade_schools'
            | 'watch_jewelry_repair'
            | 'welding_repair'
            | 'wholesale_clubs'
            | 'wig_and_toupee_stores'
            | 'wires_money_orders'
            | 'womens_accessory_and_specialty_shops'
            | 'womens_ready_to_wear_stores'
            | 'wrecking_and_salvage_yards'

          type Interval =
            | 'all_time'
            | 'daily'
            | 'monthly'
            | 'per_authorization'
            | 'weekly'
            | 'yearly'
        }
      }

      type Status = 'active' | 'canceled' | 'inactive' | 'lost' | 'stolen'
    }

    /**
     * For virtual cards only. Retrieves an Issuing card_details object that contains [the sensitive details](https://stripe.com/docs/issuing/cards/management#virtual-card-info) of a virtual card.
     */
    interface CardRetrieveDetailsParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class CardsResource {
      /**
       * Creates an Issuing Card object.
       */
      create(
        params: CardCreateParams,
        options?: HeaderOptions
      ): Promise<Issuing.Card>;

      /**
       * Returns a list of Issuing Card objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
       */
      list(
        params?: CardListParams,
        options?: HeaderOptions
      ): Promise<ApiList<Issuing.Card>>;

      /**
       * Retrieves an Issuing Card object.
       */
      retrieve(
        id: string,
        params?: CardRetrieveParams,
        options?: HeaderOptions
      ): Promise<Issuing.Card>;

      /**
       * Updates the specified Issuing Card object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
       */
      update(
        id: string,
        params?: CardUpdateParams,
        options?: HeaderOptions
      ): Promise<Issuing.Card>;

      /**
       * For virtual cards only. Retrieves an Issuing card_details object that contains [the sensitive details](https://stripe.com/docs/issuing/cards/management#virtual-card-info) of a virtual card.
       */
      retrieveDetails(
        id: string,
        params?: CardRetrieveDetailsParams,
        options?: HeaderOptions
      ): Promise<Issuing.CardDetails>;
    }
  }
}