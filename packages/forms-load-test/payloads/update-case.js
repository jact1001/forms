export const useUpdateCasePayload = (caseId, name, formId) => {
    return {
        "id": caseId,
        "case_name": name,
        "case_creator": "johnny.chinchajoa@mercadolibre.com.co",
        "case_state": {
            "id": "in-progress",
            "name": "En Progreso"
        },
        "form_id": formId,
        "form_name": "Evaluación de Dynamic Forms.",
        "sections": [
            {
                "id": "b53d4626-11af-4c98-bb4f-258626f41d7a",
                "sectionName": "Tu experiencia con formularios",
                "access": [{
                    "userId": "jact1001@gmail.com",
                    "userName": "Johnny Andres Chinchajoa Taimal",
                    "permission": ["write"]
                }, {
                    "userId": "all",
                    "userName": "Todos",
                    "permission": ["write"]
                }, {
                    "userId": "johnny.chinchajoa@mercadolibre.com.co",
                    "userName": "Johnny Andres Chinchajoa Taimal",
                    "permission": ["write"]
                }],
                "fields": [{
                    "field_id": "0003",
                    "is_required": true,
                    "type": "radio",
                    "label": "¿Tienes experiencia en el uso de aplicaciones para crear formularios?",
                    "name": "Opciones",
                    "options": [{"id": "01", "text": "Si"}, {"id": "02", "text": "No"}],
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": {"id": "02", "text": "No"},
                    "form_field_id": "d3bc49f8-61af-4fea-9a45-dae328d81a5e"
                }, {
                    "field_id": "0004",
                    "is_required": true,
                    "type": "checkbox",
                    "label": "¿Qué tipo de formularios sueles crear en estas aplicaciones?",
                    "name": "Casillas",
                    "options": [{"id": "01", "text": "Cuestionarios"}, {
                        "id": "03",
                        "text": "Recaudo de información"
                    }, {"id": "04", "text": "Encuestas"}, {"id": "05", "text": "Otro"}],
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": [{"id": "03", "text": "Recaudo de información"}, {"id": "05", "text": "Otro"}],
                    "form_field_id": "1827acf2-ffda-4653-bd26-c8e4d9624a0d"
                }, {
                    "field_id": "0004",
                    "is_required": true,
                    "type": "checkbox",
                    "label": "¿Qué dispositivos usas en el diligenciamiento de formularios?",
                    "name": "Casillas",
                    "options": [{"id": "01", "text": "Computador de escritorio"}, {"id": "02", "text": "Portátil"}, {
                        "id": "03",
                        "text": "Tablet"
                    }, {"id": "04", "text": "Celular"}, {"id": "05", "text": "Otros"}],
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": [{"id": "04", "text": "Celular"}, {"id": "02", "text": "Portátil"}],
                    "form_field_id": "89f2828c-7dbd-4033-b1f0-356450a1af69"
                }, {
                    "field_id": "0001",
                    "is_required": true,
                    "type": "text",
                    "label": "section 1 - test 1",
                    "name": "Texto",
                    "placeholder": "Texto corto",
                    "max_length": "120",
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": "prueba",
                    "form_field_id": "425183fa-e38d-49e3-94a0-580594ce5338"
                }, {
                    "field_id": "0001",
                    "is_required": true,
                    "type": "text",
                    "label": "section 1 - test 2",
                    "name": "Texto",
                    "placeholder": "Texto corto",
                    "max_length": "120",
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": "prueba",
                    "form_field_id": "afa8d97e-105e-4160-afd3-03aeebc0948a"
                }, {
                    "field_id": "0001",
                    "is_required": true,
                    "type": "text",
                    "label": "section 1 - test 3",
                    "name": "Texto",
                    "placeholder": "Texto corto",
                    "max_length": "120",
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": "prueba",
                    "form_field_id": "a2136c6b-9c07-48b9-be99-3c9e35ebd945"
                }, {
                    "field_id": "0001",
                    "is_required": true,
                    "type": "text",
                    "label": "section 1 - test 4",
                    "name": "Texto",
                    "placeholder": "Texto corto",
                    "max_length": "120",
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": "prueba",
                    "form_field_id": "e0eb5b0e-72e0-4224-9847-8295be519194"
                }]
            },
            {
                "id": "a6889c43-d1f0-4756-86a1-036dd9d1f3e0",
                "sectionName": "Diseño de formulario",
                "access": [{
                    "userId": "jact1001@gmail.com",
                    "userName": "Johnny Andres Chinchajoa Taimal",
                    "permission": ["write"]
                }, {
                    "userId": "all",
                    "userName": "Todos",
                    "permission": ["write"]
                }, {
                    "userId": "johnny.chinchajoa@mercadolibre.com.co",
                    "userName": "Johnny Andres Chinchajoa Taimal",
                    "permission": ["write"]
                }],
                "fields": [{
                    "field_id": "0003",
                    "is_required": true,
                    "type": "radio",
                    "label": "¿Es claro cómo añadir el nombre del formulario?",
                    "name": "Opciones",
                    "options": [{"id": "01", "text": "Si"}, {"id": "02", "text": "No"}],
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": {"id": "02", "text": "No"},
                    "form_field_id": "d39fbf21-4278-4d2d-959f-5dd81d6883ef"
                }, {
                    "field_id": "0003",
                    "is_required": true,
                    "type": "radio",
                    "label": "¿Es claro cómo asignar campos a una sección del formularios?",
                    "name": "Opciones",
                    "options": [{"id": "01", "text": "Si"}, {"id": "02", "text": "No"}],
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": {"id": "01", "text": "Si"},
                    "form_field_id": "5dcb5fd4-6013-48ff-aac4-a0fb8a2b65c9"
                }, {
                    "field_id": "0003",
                    "is_required": true,
                    "type": "radio",
                    "label": "¿Es claro cómo asignar secciones a un formulario?",
                    "name": "Opciones",
                    "options": [{"id": "01", "text": "Si"}, {"id": "02", "text": "No"}],
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": {"id": "02", "text": "No"},
                    "form_field_id": "092718c8-2456-4f06-ab02-deac7280ea35"
                }, {
                    "field_id": "0003",
                    "is_required": true,
                    "type": "radio",
                    "label": "¿Es claro cómo asignar los diligenciadores de una sección del formularios?",
                    "name": "Opciones",
                    "options": [{"id": "01", "text": "Si"}, {"id": "02", "text": "No"}],
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": {"id": "01", "text": "Si"},
                    "form_field_id": "cefe8944-56dc-402d-bf05-481fee3b8e00"
                }, {
                    "field_id": "0003",
                    "is_required": true,
                    "type": "radio",
                    "label": "¿Es claro cómo guardar un formulario?",
                    "name": "Opciones",
                    "options": [{"id": "01", "text": "Si"}, {"id": "02", "text": "No"}],
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": {"id": "02", "text": "No"},
                    "form_field_id": "c1015c10-d154-42ac-ae5f-e025366b11f3"
                }, {
                    "field_id": "0003",
                    "is_required": true,
                    "type": "radio",
                    "label": "¿Pudiste ejecutar los 8 pasos de la etapa 1?",
                    "name": "Opciones",
                    "options": [{"id": "01", "text": "Si"}, {"id": "02", "text": "No"}],
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": {"id": "01", "text": "Si"},
                    "form_field_id": "07c210cb-120d-470e-ac3f-cb0556dd44b7"
                }, {
                    "field_id": "0004",
                    "is_required": true,
                    "type": "checkbox",
                    "label": "En caso de responder NO a la pregunta anterior ¿qué pasos NO pudiste ejecutar?",
                    "name": "Casillas",
                    "options": [{"id": "01", "text": "Paso 1"}, {"id": "02", "text": "Paso 2"}, {
                        "id": "03",
                        "text": "Paso 3"
                    }, {"id": "04", "text": "Paso 4"}, {"id": "05", "text": "Paso 5"}, {
                        "id": "06",
                        "text": "Paso 6"
                    }, {"id": "07", "text": "Paso 7"}, {"id": "08", "text": "Paso 8"}],
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": [{"id": "02", "text": "Paso 2"}, {"id": "05", "text": "Paso 5"}],
                    "form_field_id": "6b4305b2-a630-4e89-8c09-25fef25013d5"
                }]
            },
            {
                "id": "30b1fe61-002e-47e9-b02a-ba7646bb7af6",
                "sectionName": "Lista de formularios",
                "access": [{
                    "userId": "jact1001@gmail.com",
                    "userName": "Johnny Andres Chinchajoa Taimal",
                    "permission": ["write"]
                }, {
                    "userId": "all",
                    "userName": "Todos",
                    "permission": ["write"]
                }, {
                    "userId": "johnny.chinchajoa@mercadolibre.com.co",
                    "userName": "Johnny Andres Chinchajoa Taimal",
                    "permission": ["write"]
                }],
                "fields": [{
                    "field_id": "0003",
                    "is_required": true,
                    "type": "radio",
                    "label": "¿Los formularios fueron asignados correctamente?",
                    "name": "Opciones",
                    "options": [{"id": "01", "text": "Si"}, {"id": "02", "text": "No"}],
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": {"id": "02", "text": "No"},
                    "form_field_id": "3e71ba09-7cc9-408d-b2fa-1c90ea544010"
                }, {
                    "field_id": "0003",
                    "is_required": true,
                    "type": "radio",
                    "label": "¿Se entiende que es un caso de un formulario?",
                    "name": "Opciones",
                    "options": [{"id": "01", "text": "Si"}, {"id": "02", "text": "No"}],
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": {"id": "01", "text": "Si"},
                    "form_field_id": "84266857-f012-4e61-b489-d5b5756d730d"
                }, {
                    "field_id": "0003",
                    "is_required": true,
                    "type": "radio",
                    "label": "¿Es claro como crear un caso?",
                    "name": "Opciones",
                    "options": [{"id": "01", "text": "Si"}, {"id": "02", "text": "No"}],
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": {"id": "02", "text": "No"},
                    "form_field_id": "168eca99-faca-45be-9789-fdb1a680d5c0"
                }, {
                    "field_id": "0003",
                    "is_required": true,
                    "type": "radio",
                    "label": "¿Pudiste ejecutar los 2 pasos de la etapa 2?",
                    "name": "Opciones",
                    "options": [{"id": "01", "text": "Si"}, {"id": "02", "text": "No"}],
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": {"id": "01", "text": "Si"},
                    "form_field_id": "a5e98073-b465-417d-96ba-b367f59f77e2"
                }, {
                    "field_id": "0004",
                    "is_required": true,
                    "type": "checkbox",
                    "label": "En caso de responder NO a la pregunta anterior ¿qué pasos NO pudiste ejecutar?",
                    "name": "Casillas",
                    "options": [{"id": "01", "text": "Paso 1"}, {"id": "02", "text": "Paso 2"}],
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": [{"id": "01", "text": "Paso 1"}],
                    "form_field_id": "98d0e995-ba48-4ef6-9e0e-966887d72632"
                }, {
                    "field_id": "0001",
                    "is_required": true,
                    "type": "text",
                    "label": "section 3 - test 1",
                    "name": "Texto",
                    "placeholder": "Texto corto",
                    "max_length": "120",
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": "prueba",
                    "form_field_id": "eae67630-3daa-4fc9-bb16-2c018616eb46"
                }, {
                    "field_id": "0001",
                    "is_required": true,
                    "type": "text",
                    "label": "section 3 - test 1",
                    "name": "Texto",
                    "placeholder": "Texto corto",
                    "max_length": "120",
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": "prueba",
                    "form_field_id": "90ee46e9-b246-4743-8803-e7e8fdb84425"
                }]
            },
            {
                "id": "8b9d0f7d-4e92-4d32-8fc4-432790110802",
                "sectionName": "Caso de uso",
                "access": [{
                    "userId": "jact1001@gmail.com",
                    "userName": "Johnny Andres Chinchajoa Taimal",
                    "permission": ["write"]
                }, {
                    "userId": "all",
                    "userName": "Todos",
                    "permission": ["write"]
                }, {
                    "userId": "johnny.chinchajoa@mercadolibre.com.co",
                    "userName": "Johnny Andres Chinchajoa Taimal",
                    "permission": ["write"]
                }],
                "fields": [{
                    "field_id": "0003",
                    "is_required": true,
                    "type": "radio",
                    "label": "¿Las secciones fueron asignadas correctamente?",
                    "name": "Opciones",
                    "options": [{"id": "01", "text": "Si"}, {"id": "02", "text": "No"}],
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": {"id": "02", "text": "No"},
                    "form_field_id": "ab3eb0f9-2684-40c7-96f2-87f64fd227cd"
                }, {
                    "field_id": "0003",
                    "is_required": true,
                    "type": "radio",
                    "label": "Es claro como diligenciar y guardar la información?",
                    "name": "Opciones",
                    "options": [{"id": "01", "text": "Si"}, {"id": "02", "text": "No"}],
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": {"id": "01", "text": "Si"},
                    "form_field_id": "f334a0e3-5666-4a52-bfc3-6e8511f3902d"
                }, {
                    "field_id": "0003",
                    "is_required": true,
                    "type": "radio",
                    "label": "¿Pudiste ejecutar los 5 pasos de la etapa 3?",
                    "name": "Opciones",
                    "options": [{"id": "01", "text": "Si"}, {"id": "02", "text": "No"}],
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": {"id": "02", "text": "No"},
                    "form_field_id": "70c207cd-5a22-4edf-9647-5ddce9fac030"
                }, {
                    "field_id": "0004",
                    "is_required": true,
                    "type": "checkbox",
                    "label": "En caso de responder NO a la pregunta anterior ¿qué pasos NO pudiste ejecutar?",
                    "name": "Casillas",
                    "options": [{"id": "01", "text": "Paso 1"}, {"id": "02", "text": "Paso 2"}, {
                        "id": "03",
                        "text": "Paso 3"
                    }, {"id": "04", "text": "Paso 4"}, {"id": "05", "text": "Paso 5"}],
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": [{"id": "03", "text": "Paso 3"}, {"id": "05", "text": "Paso 5"}],
                    "form_field_id": "8b1d7a7d-b30b-49e1-b8a4-37499adce11f"
                }, {
                    "field_id": "0001",
                    "is_required": true,
                    "type": "text",
                    "label": "section 4 - test 1",
                    "name": "Texto",
                    "placeholder": "Texto corto",
                    "max_length": "120",
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": "prueba",
                    "form_field_id": "5aec5d9e-cf6e-47e5-9590-b202ec3b8537"
                }, {
                    "field_id": "0001",
                    "is_required": true,
                    "type": "text",
                    "label": "section 4 - test 2",
                    "name": "Texto",
                    "placeholder": "Texto corto",
                    "max_length": "120",
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": "prueba",
                    "form_field_id": "b65f6364-96d6-47a5-99c0-2d8dc47891f4"
                }, {
                    "field_id": "0001",
                    "is_required": true,
                    "type": "text",
                    "label": "section 4 - test 3",
                    "name": "Texto",
                    "placeholder": "Texto corto",
                    "max_length": "120",
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": "prueba",
                    "form_field_id": "4a5ce30d-1838-4a53-99c8-5db744785964"
                }]
            },
            {
                "id": "ba90175b-e45b-4681-b661-2ad2ae7259b0",
                "sectionName": "Modificación de formulario",
                "access": [{
                    "userId": "jact1001@gmail.com",
                    "userName": "Johnny Andres Chinchajoa Taimal",
                    "permission": ["write"]
                }, {
                    "userId": "all",
                    "userName": "Todos",
                    "permission": ["write"]
                }, {
                    "userId": "johnny.chinchajoa@mercadolibre.com.co",
                    "userName": "Johnny Andres Chinchajoa Taimal",
                    "permission": ["write"]
                }],
                "fields": [{
                    "field_id": "0003",
                    "is_required": true,
                    "type": "radio",
                    "label": "¿Es claro cómo modificar un formulario existente?",
                    "name": "Opciones",
                    "options": [{"id": "01", "text": "Si"}, {"id": "02", "text": "No"}],
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": {"id": "02", "text": "No"},
                    "form_field_id": "272c1c7b-0b1f-4eed-b704-b346a119c0d9"
                }, {
                    "field_id": "0003",
                    "is_required": true,
                    "type": "radio",
                    "label": "¿Pudiste ejecutar los 4 pasos de la etapa 4?",
                    "name": "Opciones",
                    "options": [{"id": "01", "text": "Si"}, {"id": "02", "text": "No"}],
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": {"id": "01", "text": "Si"},
                    "form_field_id": "94b85e4a-127f-4829-a53b-051d3c6005b9"
                }, {
                    "field_id": "0004",
                    "is_required": true,
                    "type": "checkbox",
                    "label": "En caso de responder NO a la pregunta anterior ¿qué pasos NO pudiste ejecutar?",
                    "name": "Casillas",
                    "options": [{"id": "01", "text": "Paso 1"}, {"id": "02", "text": "Paso 2"}, {
                        "id": "03",
                        "text": "Paso 3"
                    }, {"id": "04", "text": "Paso 4"}],
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": [{"id": "02", "text": "Paso 2"}],
                    "form_field_id": "bf3545ea-4a65-475c-b251-ed1a159afe7d"
                }, {
                    "field_id": "0001",
                    "is_required": true,
                    "type": "text",
                    "label": "section 5 - test 1",
                    "name": "Texto",
                    "placeholder": "Texto corto",
                    "max_length": "120",
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": "prueba",
                    "form_field_id": "2bf73ce6-3358-4648-9569-82a3701e3b77"
                }, {
                    "field_id": "0001",
                    "is_required": true,
                    "type": "text",
                    "label": "section 5 - test 2",
                    "name": "Texto",
                    "placeholder": "Texto corto",
                    "max_length": "120",
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": "prueba",
                    "form_field_id": "71782e69-760a-4792-adcc-e9c68b4b7f12"
                }, {
                    "field_id": "0001",
                    "is_required": true,
                    "type": "text",
                    "label": "section 5 - test 3",
                    "name": "Texto",
                    "placeholder": "Texto corto",
                    "max_length": "120",
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": "prueba",
                    "form_field_id": "48a15ce7-55b9-478a-be0b-b88a60b6db45"
                }, {
                    "field_id": "0001",
                    "is_required": true,
                    "type": "text",
                    "label": "section 5 - test 4",
                    "name": "Texto",
                    "placeholder": "Texto corto",
                    "max_length": "120",
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": "prueba",
                    "form_field_id": "8a083b4c-8277-48ad-9b11-c4dc42577766"
                }]
            },
            {
                "id": "86348b6c-0ab6-4eba-a2c9-6ecc0de25517",
                "sectionName": "Diligenciamiento de un caso de formulario en modo offline",
                "access": [{"userId": "all", "userName": "Todos", "permission": ["write"]}, {
                    "userId": "jact1001@gmail.com",
                    "userName": "Johnny Andres Chinchajoa Taimal",
                    "permission": ["write"]
                }, {
                    "userId": "johnny.chinchajoa@mercadolibre.com.co",
                    "userName": "Johnny Andres Chinchajoa Taimal",
                    "permission": ["write"]
                }],
                "fields": [{
                    "field_id": "0003",
                    "is_required": true,
                    "type": "radio",
                    "label": "¿Pudiste ejecutar los 5 pasos de la etapa 5?",
                    "name": "Opciones",
                    "options": [{"id": "01", "text": "Si"}, {"id": "02", "text": "No"}],
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": {"id": "02", "text": "No"},
                    "form_field_id": "466ca83d-a147-476d-832f-e6f6d3a07af3"
                }, {
                    "field_id": "0004",
                    "is_required": true,
                    "type": "checkbox",
                    "label": "En caso de responder NO a la pregunta anterior ¿qué pasos NO pudiste ejecutar?",
                    "name": "Casillas",
                    "options": [{"id": "01", "text": "Paso 1"}, {"id": "02", "text": "Paso 2"}, {
                        "id": "03",
                        "text": "Paso 3"
                    }, {"id": "04", "text": "Paso 4"}, {"id": "05", "text": "Paso 5"}],
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": [{"id": "01", "text": "Paso 1"}, {"id": "05", "text": "Paso 5"}],
                    "form_field_id": "ce2b8d05-ccf7-47a9-ad14-2aca1f7192de"
                }, {
                    "field_id": "0001",
                    "is_required": true,
                    "type": "text",
                    "label": "section 6 - test 1",
                    "name": "Texto",
                    "placeholder": "Texto corto",
                    "max_length": "120",
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": "prueba",
                    "form_field_id": "714bc0b6-b1dd-4c40-a64f-814452cd0e07"
                }, {
                    "field_id": "0001",
                    "is_required": true,
                    "type": "text",
                    "label": "section 6 - test 2",
                    "name": "Texto",
                    "placeholder": "Texto corto",
                    "max_length": "120",
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": "prueba",
                    "form_field_id": "874fb3e0-03e2-4edf-9917-cc111d1adde2"
                }, {
                    "field_id": "0001",
                    "is_required": true,
                    "type": "text",
                    "label": "section 6 - test 3",
                    "name": "Texto",
                    "placeholder": "Texto corto",
                    "max_length": "120",
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": "prueba",
                    "form_field_id": "d33fdaed-ee47-48aa-8e4a-25024e339bc5"
                }, {
                    "field_id": "0001",
                    "is_required": true,
                    "type": "text",
                    "label": "section 6 - test 4",
                    "name": "Texto",
                    "placeholder": "Texto corto",
                    "max_length": "120",
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": "prueba",
                    "form_field_id": "5b9f36d7-6136-4d29-81a9-e16f33387bfb"
                }, {
                    "field_id": "0001",
                    "is_required": true,
                    "type": "text",
                    "label": "section 6 - test 5",
                    "name": "Texto",
                    "placeholder": "Texto corto",
                    "max_length": "120",
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": "prueba",
                    "form_field_id": "725ffba6-c9df-4a91-9acb-01f9e3116a9f"
                }]
            },
            {
                "id": "62f6ff33-2c97-451a-baa8-fbab42b4dc92",
                "sectionName": "Consulta y descarga de información recolectada ",
                "access": [{"userId": "all", "userName": "Todos", "permission": ["write"]}, {
                    "userId": "jact1001@gmail.com",
                    "userName": "Johnny Andres Chinchajoa Taimal",
                    "permission": ["write"]
                }, {
                    "userId": "johnny.chinchajoa@mercadolibre.com.co",
                    "userName": "Johnny Andres Chinchajoa Taimal",
                    "permission": ["write"]
                }],
                "fields": [{
                    "field_id": "0003",
                    "is_required": true,
                    "type": "radio",
                    "label": "¿Es claro cómo descargar la información recolectada?",
                    "name": "Opciones",
                    "options": [{"id": "01", "text": "Si"}, {"id": "02", "text": "No"}],
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": {"id": "02", "text": "No"},
                    "form_field_id": "278cfa43-df04-4d34-8c23-ebf00398f1a6"
                }, {
                    "field_id": "0003",
                    "is_required": true,
                    "type": "radio",
                    "label": "¿Pudiste ejecutar los 2 pasos de la etapa 6?",
                    "name": "Opciones",
                    "options": [{"id": "01", "text": "Si"}, {"id": "02", "text": "No"}],
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": {"id": "01", "text": "Si"},
                    "form_field_id": "59ac9dae-605f-4724-9bd4-e9ee45f8f437"
                }, {
                    "field_id": "0004",
                    "is_required": true,
                    "type": "checkbox",
                    "label": "En caso de responder NO a la pregunta anterior ¿qué pasos NO pudiste ejecutar?",
                    "name": "Casillas",
                    "options": [{"id": "01", "text": "Paso 1"}, {"id": "02", "text": "Paso 2"}],
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": [{"id": "01", "text": "Paso 1"}, {"id": "02", "text": "Paso 2"}],
                    "form_field_id": "d2ecf68f-a7f8-410e-b29b-f88ff2e35680"
                }, {
                    "field_id": "0001",
                    "is_required": true,
                    "type": "text",
                    "label": "section 7 - test 1",
                    "name": "Texto",
                    "placeholder": "Texto corto",
                    "max_length": "120",
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": "prueba",
                    "form_field_id": "2e532820-625f-4ba5-ae1c-4f623cdd9451"
                }, {
                    "field_id": "0001",
                    "is_required": true,
                    "type": "text",
                    "label": "section 7 - test 2",
                    "name": "Texto",
                    "placeholder": "Texto corto",
                    "max_length": "120",
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": "prueba",
                    "form_field_id": "05fc268c-c1f2-424c-a969-abbc10c331a4"
                }, {
                    "field_id": "0001",
                    "is_required": true,
                    "type": "text",
                    "label": "section 7 - test 3",
                    "name": "Texto",
                    "placeholder": "Texto corto",
                    "max_length": "120",
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": "prueba",
                    "form_field_id": "873904f8-9005-40ce-b4ce-071800246235"
                }, {
                    "field_id": "0001",
                    "is_required": true,
                    "type": "text",
                    "label": "section 7 - test 4",
                    "name": "Texto",
                    "placeholder": "Texto corto",
                    "max_length": "120",
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": "prueba",
                    "form_field_id": "f43cd8b6-3a2e-4884-b3fb-09d5e46a0cc5"
                }]
            },
            {
                "id": "b4184265-7c6e-4497-9aca-fb35a7eed3ca",
                "sectionName": "Preguntas de cierre",
                "access": [{"userId": "all", "userName": "Todos", "permission": ["write"]}, {
                    "userId": "jact1001@gmail.com",
                    "userName": "Johnny Andres Chinchajoa Taimal",
                    "permission": ["write"]
                }, {
                    "userId": "johnny.chinchajoa@mercadolibre.com.co",
                    "userName": "Johnny Andres Chinchajoa Taimal",
                    "permission": ["write"]
                }],
                "fields": [{
                    "field_id": "0003",
                    "is_required": true,
                    "type": "radio",
                    "label": "En una escala del 1 al 10, ¿qué tan satisfecho(a) te sientes con la experiencia general al usar la aplicación? ",
                    "name": "Opciones",
                    "options": [{"id": "01", "text": "1"}, {"id": "02", "text": "2"}, {"id": "03", "text": "3"}, {
                        "id": "04",
                        "text": "4"
                    }, {"id": "05", "text": "5"}, {"id": "06", "text": "6"}, {"id": "07", "text": "7"}, {
                        "id": "08",
                        "text": "8"
                    }, {"id": "09", "text": "9"}, {"id": "010", "text": "10"}],
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": {"id": "07", "text": "7"},
                    "form_field_id": "8d4dbc87-2711-4f4e-a33a-f6435977c8c8"
                }, {
                    "field_id": "0003",
                    "is_required": true,
                    "type": "radio",
                    "label": "¿La aplicación se ajusta a tus necesidades ó a lo que esperabas lograr con ella? ",
                    "name": "Opciones",
                    "options": [{"id": "01", "text": "Si"}, {"id": "02", "text": "No"}],
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": {"id": "02", "text": "No"},
                    "form_field_id": "b080466c-1572-4d2e-b82b-610faf5a4910"
                }, {
                    "field_id": "0002",
                    "is_required": true,
                    "type": "textArea",
                    "label": "¿Hubo aspectos de la aplicación que consideras que podrían mejorarse? ",
                    "name": "Párrafo",
                    "placeholder": "Texto largo",
                    "min_length": "10",
                    "max_length": "60",
                    "rows": "3",
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": "prueba prueba prueba prueba prueba prueba prueba prueba prueba prueba prueba prueba",
                    "form_field_id": "944dce69-e936-4c92-accc-a1c6bff2c915"
                }, {
                    "field_id": "0002",
                    "is_required": true,
                    "type": "textArea",
                    "label": "¿Hubo alguna parte de la aplicación que te resultó especialmente útil o que te gustó mucho? ",
                    "name": "Párrafo",
                    "placeholder": "Texto largo",
                    "min_length": "10",
                    "max_length": "60",
                    "rows": "3",
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": "prueba prueba prueba prueba prueba prueba prueba prueba prueba prueba prueba prueba",
                    "form_field_id": "204a7a71-eaa3-4a4e-af67-abed0c34f7d3"
                }, {
                    "field_id": "0001",
                    "is_required": true,
                    "type": "text",
                    "label": "¿Conoces alguna herramienta que permita hacer lo mismo?",
                    "name": "Texto",
                    "placeholder": "Texto corto",
                    "max_length": "120",
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": "prueba prueba prueba prueba",
                    "form_field_id": "28c55c6c-2257-4714-bc88-5302b47105ec"
                }, {
                    "field_id": "0001",
                    "is_required": true,
                    "type": "text",
                    "label": "section 8 - test 1",
                    "name": "Texto",
                    "placeholder": "Texto corto",
                    "max_length": "120",
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": "prueba prueba prueba prueba",
                    "form_field_id": "ae6a590b-15cc-487b-a1f9-3d70c5d813cc"
                }, {
                    "field_id": "0001",
                    "is_required": true,
                    "type": "text",
                    "label": "section 8 - test 2",
                    "name": "Texto",
                    "placeholder": "Texto corto",
                    "max_length": "120",
                    "label_placeholder": "Escribe aquí el nombre de tu campo",
                    "option_placeholder": "Escribe tu opción",
                    "value": "prueba prueba prueba prueba",
                    "form_field_id": "a324505e-0c1d-4306-a1ef-9208344aac56"
                }]
            }
        ]
    }
}
