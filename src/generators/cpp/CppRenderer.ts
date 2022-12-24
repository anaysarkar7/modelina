import { AbstractRenderer } from "../AbstractRenderer";
import { CppGenerator, CppOptions } from "./CppGenerator";
import { ConstrainedMetaModel, InputMetaModel, Preset } from "../../models";

/**
 * Common renderer for Template
 *
 * @extends AbstractRenderer
 */
export abstract class CppRenderer<
  RendererModelType extends ConstrainedMetaModel
> extends AbstractRenderer<CppOptions, CppGenerator, RendererModelType> {
  constructor(
    options: CppOptions,
    generator: CppGenerator,
    presets: Array<[Preset, unknown]>,
    model: RendererModelType,
    inputModel: InputMetaModel
  ) {
    super(options, generator, presets, model, inputModel);
  }
}
