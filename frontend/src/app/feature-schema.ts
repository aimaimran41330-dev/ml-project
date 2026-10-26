export type Feature = {
  name: string;
  label: string;
  kind: 'number' | 'category';
  required: boolean;
  options?: string[];
  min?: number;
  max?: number;
};

export const FEATURES: Feature[] = [
  { name: 'price', label: 'Price (BRL)', kind: 'number', required: true, min: 0 },
  { name: 'freight_value', label: 'Freight / Shipping (BRL)', kind: 'number', required: true, min: 0 },
  { name: 'product_weight_g', label: 'Product Weight (g)', kind: 'number', required: true, min: 0 },
  { name: 'product_length_cm', label: 'Product Length (cm)', kind: 'number', required: true, min: 0 },
  { name: 'product_height_cm', label: 'Product Height (cm)', kind: 'number', required: true, min: 0 },
  { name: 'product_width_cm', label: 'Product Width (cm)', kind: 'number', required: true, min: 0 },
  { name: 'payment_installments', label: 'Payment Installments', kind: 'number', required: true, min: 1, max: 24 },
  { name: 'payment_value', label: 'Payment Value (BRL)', kind: 'number', required: true, min: 0 },
  { name: 'delivery_days', label: 'Actual Delivery Days', kind: 'number', required: true, min: 0, max: 365 },
  { name: 'estimated_days', label: 'Estimated Delivery Days', kind: 'number', required: true, min: 0, max: 365 },
  { name: 'purchase_month', label: 'Purchase Month (1-12)', kind: 'number', required: true, min: 1, max: 12 },
  { name: 'order_status', label: 'Order Status', kind: 'category', required: true,
    options: ['approved','canceled','delivered','invoiced','processing','shipped','unavailable'] },
  { name: 'payment_type', label: 'Payment Type', kind: 'category', required: true,
    options: ['boleto','credit_card','debit_card','unknown','voucher'] },
  { name: 'customer_state', label: 'Customer State', kind: 'category', required: true,
    options: ['AC','AL','AM','AP','BA','CE','DF','ES','GO','MA','MG','MS','MT','PA','PB','PE','PI','PR','RJ','RN','RO','RR','RS','SC','SE','SP','TO'] },
  { name: 'product_category_name', label: 'Product Category', kind: 'category', required: true,
    options: ['agro_industria_e_comercio','alimentos','alimentos_bebidas','artes','artes_e_artesanato','artigos_de_festas','artigos_de_natal','audio','automotivo','bebes','bebidas','beleza_saude','brinquedos','cama_mesa_banho','casa_conforto','casa_conforto_2','casa_construcao','cds_dvds_musicais','cine_foto','climatizacao','consoles_games','construcao_ferramentas_construcao','construcao_ferramentas_ferramentas','construcao_ferramentas_iluminacao','construcao_ferramentas_jardim','construcao_ferramentas_seguranca','cool_stuff','dvds_blu_ray','eletrodomesticos','eletrodomesticos_2','eletronicos','eletroportateis','esporte_lazer','fashion_bolsas_e_acessorios','fashion_calcados','fashion_esporte','fashion_roupa_feminina','fashion_roupa_infanto_juvenil','fashion_roupa_masculina','fashion_underwear_e_moda_praia','ferramentas_jardim','flores','fraldas_higiene','industria_comercio_e_negocios','informatica_acessorios','instrumentos_musicais','la_cuisine','livros_importados','livros_interesse_geral','livros_tecnicos','malas_acessorios','market_place','moveis_colchao_e_estofado','moveis_cozinha_area_de_servico_jantar_e_jardim','moveis_decoracao','moveis_escritorio','moveis_quarto','moveis_sala','musica','papelaria'] },
];
