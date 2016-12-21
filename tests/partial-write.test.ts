///<reference path="../node_modules/@types/jasmine/index.d.ts"/>
///<reference path="@types/karma-read-json/index.d.ts"/>
/**
 * @license
 * Copyright 2016 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Oas20Document} from "../src/models/2.0/document.model";
import {OasLibraryUtils} from "../src/library.utils";

describe("Partial Write (2.0)", () => {

    let library: OasLibraryUtils;
    let document: Oas20Document;

    beforeEach(() => {
        library = new OasLibraryUtils();
        document = <Oas20Document> library.createDocument("2.0");
    });

    it("Info", () => {
        let json: any = readJSON('tests/fixtures/partial-write/2.0/pet-store.json');
        let document: Oas20Document = <Oas20Document> library.createDocument(json);

        let expectedObj: any = json.info;
        let actualObj: any = library.writeNode(document.info);
        expect(actualObj).toEqual(expectedObj);
    });

    it("Paths", () => {
        let json: any = readJSON('tests/fixtures/partial-write/2.0/pet-store.json');
        let document: Oas20Document = <Oas20Document> library.createDocument(json);

        let expectedObj: any = json.paths;
        let actualObj: any = library.writeNode(document.paths);
        expect(actualObj).toEqual(expectedObj);
    });

    it("Path Response", () => {
        let json: any = readJSON('tests/fixtures/partial-write/2.0/pet-store.json');
        let document: Oas20Document = <Oas20Document> library.createDocument(json);

        let expectedObj: any = json.paths["/pet/{petId}"].get.responses["200"];
        let actualObj: any = library.writeNode(document.paths.pathItem("/pet/{petId}").get.responses.response("200"));
        expect(actualObj).toEqual(expectedObj);
    });

});