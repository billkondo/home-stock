import { Tag } from '../../../../models/tag';
import { ErrorsType } from './Component';
import { maxLength } from './Component';

type Stage = 'SUBMITTING' | 'EDITING';

export const validateTag = (tag: Tag, stage: Stage): ErrorsType => {
  let errors: ErrorsType = {};

  if (tag.name.length === 0 && stage === 'SUBMITTING')
    errors.name = 'Escreva um nome para a categoria';
  else if (tag.name.length > maxLength.name)
    errors.name = 'O nome digitado é muito longo';

  if (!!tag.description && tag.description.length > maxLength.description)
    errors.description = 'A descrição é muito longa';

  return errors;
};
