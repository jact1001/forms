import axios from "axios";
import { API_BASE_PATH } from "../../../config";
import {IForm} from "../data/domain/IForm";

const mock: IForm = {
    "id": "6526dcdc10999f9546a16a39",
    "form_name": "Formulario prueba",
    "state": "",
    "sections":[{
    "id": "6518a8998929100f76faaecf",
    "sectionName": "seccion preuba 1",
    "access": [
      {
        "userId": "jact1001@gmail.com",
        "userName": "Johnny Andres Chinchajoa Taimal",
        "permission": [
          "read"
        ],
      }
    ],
    "fields": [
      {
        "field_id": "0001",
        "is_required": true,
        "type": "text",
        "label": "Texto",
        "value": "value pruea",
        "placeholder": "Texto corto",
        "max_length": "120",
        "label_placeholder": "Escribe aquí el nombre de tu campo",
        "option_placeholder": "Escribe tu opción",
        "form_field_id": "634aa6c4-bf1c-4933-b844-0268bc05a11d"
      },
      {
        "field_id": "0003",
        "is_required": true,
        "type": "radio",
        "label": "Opciones",
        "options": [
          {
            "id": "01",
            "text": "opción 1"
          },
          {
            "id": "02",
            "text": "opción 2"
          }
        ],
        value: {
            "id": "02",
            "text": "opción 2"
          },
        "label_placeholder": "Escribe aquí el nombre de tu campo",
        "option_placeholder": "Escribe tu opción",
        "form_field_id": "3aa1d13c-35f4-4156-9b39-ac1634ad201c"
      },
      {
        "field_id": "0002",
        "is_required": true,
        "type": "textArea",
        "label": "Párrafo",
        "value": "value TextArea",
        "placeholder": "Texto largo",
        "min_length": "10",
        "max_length": "60",
        "rows": "3",
        "label_placeholder": "Escribe aquí el nombre de tu campo",
        "option_placeholder": "Escribe tu opción",
        "form_field_id": "09ffff3f-3a27-4169-8e39-a3faea77c61b"
      },
      {
        "field_id": "0008",
        "is_required": true,
        "type": "date",
        "label": "Fecha",
        "value": "2017-06-01",
        "label_placeholder": "Escribe aquí el nombre de tu campo",
        "option_placeholder": "Escribe tu opción",
        "form_field_id": "f9ec5ef6-2a02-4f2c-834f-3974eaba08cf"
      }, 
      {
        "field_id": "0009",
        "is_required": true,
        "type": "time",
        "label": "Hora",
        "value": "13:45",
        "label_placeholder": "Escribe aquí el nombre de tu campo",
        "option_placeholder": "Escribe tu opción",
        "form_field_id": "3ce53a17-63a0-48a6-8868-d18f289ea163"
      }/*,
      {
        "field_id": "0003",
        "is_required": true,
        "type": "radio",
        "label": "Opciones",
        "options": [
          {
            "id": "01",
            "text": "opción 1"
          },
          {
            "id": "02",
            "text": "opción 2"
          }
        ],
        value: {
            "id": "02",
            "text": "opción 2"
          }
        "label_placeholder": "Escribe aquí el nombre de tu campo",
        "option_placeholder": "Escribe tu opción",
        "form_field_id": "3aa1d13c-35f4-4156-9b39-ac1634ad201c"
      },
      {
        "field_id": "0004",
        "is_required": true,
        "type": "checkbox",
        "label": "Casillas",
        "name": "check1",
        "options": [
          {
            "id": "01",
            "text": "check 1"
          },
          {
            "id": "02",
            "text": "check 2"
          }
        ],
        "label_placeholder": "Escribe aquí el nombre de tu campo",
        "option_placeholder": "Escribe tu opción",
        "form_field_id": "a7f41555-a25a-4a69-bba7-29fd2ff4e92f"
      },
      {
        "field_id": "0005",
        "is_required": true,
        "type": "select",
        "label": "Desplegable",
        "values": [
          {
            "id": "01",
            "text": "opcion 1"
          },
          {
            "id": "02",
            "text": "opcion 2"
          }
        ],
        "label_placeholder": "Escribe aquí el nombre de tu campo",
        "option_placeholder": "Escribe tu opción",
        "form_field_id": "6e151999-8810-48cc-86cf-aa5769f716d6"
      },
      {
        "field_id": "0006",
        "is_required": true,
        "type": "number",
        "label": "Número",
        "placeholder": "Número",
        "min": "0",
        "label_placeholder": "Escribe aquí el nombre de tu campo",
        "option_placeholder": "Escribe tu opción",
        "form_field_id": "97b81a2c-7eac-49e2-928c-9e1559f0e065"
      },
      {
        "field_id": "0007",
        "is_required": true,
        "type": "email",
        "label": "Correo",
        "placeholder": "Correo electrónico",
        "max_length": "60",
        "label_placeholder": "Escribe aquí el nombre de tu campo",
        "option_placeholder": "Escribe tu opción",
        "form_field_id": "2c98dec8-b9a3-4509-9289-fa086a59d2a6"
      },
      {
        "field_id": "0008",
        "is_required": true,
        "type": "date",
        "label": "Fecha",
        "label_placeholder": "Escribe aquí el nombre de tu campo",
        "option_placeholder": "Escribe tu opción",
        "form_field_id": "f9ec5ef6-2a02-4f2c-834f-3974eaba08cf"
      },
      {
        "field_id": "0009",
        "is_required": true,
        "type": "time",
        "label": "Hora",
        "value": "08:00",
        "label_placeholder": "Escribe aquí el nombre de tu campo",
        "option_placeholder": "Escribe tu opción",
        "form_field_id": "3ce53a17-63a0-48a6-8868-d18f289ea163"
      }*/
    ]
    }]
}

export const getForm = async () => {
    //const response = await axios.get(`${API_BASE_PATH}/form`);
    return mock;

    
}
